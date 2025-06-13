import json
import re
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from llama_cpp import Llama
from datetime import datetime

app = FastAPI()
llm = Llama(model_path="D:\\easyeda-extension\\Local AI\Model\\Phi-3-mini-4k-instruct-q4.gguf", n_ctx=4096)
json_data = None
dts_data = None

class Query(BaseModel):
    text: str

def load_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f).get("Reference", {})
            types = []
            for namespace, categories in data.items():
                for category, items in categories.items():
                    for item_name, item in items.items():
                        item["name"] = item_name
                        types.append({
                            "namespace": namespace,
                            "category": category,
                            "name": item["name"],
                            "description": item.get("description", ""),
                            "url": item.get("url", ""),
                            "inherent": item.get("Inherent", [])
                        })
        print(f"Loaded {len(types)} JSON types at {datetime.now().strftime('%Y-%m-%d %H:%M:%S NZST')}")
        return types
    except Exception as e:
        print(f"Error loading JSON: {e}")
        return []

def parse_dts(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        declarations = []
        interface_pattern = r'interface\s+(\w+)\s*\{([^}]*)\}'
        for match in re.finditer(interface_pattern, content, re.DOTALL):
            name = match.group(1)
            body = match.group(2)
            members = []
            member_pattern = r'(\w+)\s*:\s*([^;]+);(?:\s*/\*\*\s*([^*]+)\*/)?'
            for m in re.finditer(member_pattern, body):
                members.append({
                    "name": m.group(1),
                    "type": m.group(2).strip(),
                    "doc": m.group(3).strip() if m.group(3) else ""
                })
            declarations.append({"name": name, "members": members})
        print(f"Parsed {len(declarations)} .d.ts interfaces")
        return declarations
    except Exception as e:
        print(f"Error parsing .d.ts: {e}")
        return []

def search_data(query, json_data, dts_data, max_items=3):
    keywords = [kw.lower() for kw in query.split() if len(kw) > 3]
    relevant = []
    namespace_weights = {"SchematicSymbol": 3, "DocumentTree": 1}
    keyword_weights = {"component": 2, "schematic": 2}
    
    for item in json_data:
        score = sum(1 for kw in keywords if kw in item["name"].lower() or kw in item["description"].lower())
        score += namespace_weights.get(item["namespace"], 0)
        score += sum(keyword_weights.get(kw, 0) for kw in keywords if kw in item["name"].lower())
        if score > 0:
            relevant.append((score, item))
    
    for decl in dts_data:
        score = sum(1 for kw in keywords if kw in decl["name"].lower())
        if score > 0:
            relevant.append((score, decl))
    
    relevant = [item for _, item in sorted(relevant, key=lambda x: x[0], reverse=True)[:max_items]]
    return relevant

def truncate_text(text, max_chars=1000):
    if len(text) <= max_chars:
        return text
    return text[:max_chars] + "... [truncated]"

@app.on_event("startup")
async def startup_event():
    global json_data, dts_data
    json_data = load_json("D:\\easyeda\\resources\\easyda-api.json")
    dts_data = parse_dts("D:\\easyeda\\resources\\easyda-api.d.ts")

    
def load_cached_answer(query, file_path="D:\\easyeda\\resources\\cached_answers.json"):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f).get(query)
    except:
        return None

def save_cached_answer(query, answer, sources, file_path="D:\\easyeda\\resources\\cached_answers.json"):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except:
        data = {}
    data[query] = {"answer": answer, "sources": sources}
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

@app.post("/ask")
async def ask_question(query: Query):
    cached = load_cached_answer(query.text)
    if cached:
        return cached
    
    relevant_data = search_data(query.text, json_data, dts_data)
    if not relevant_data:
        return {"answer": "No relevant data found.", "sources": []}
    
    context = "You are an expert in the EasyDA Professional API. Provide a concise answer with a JavaScript code example using documented methods. Data:\n"
    for item in relevant_data:
        if "namespace" in item:
            context += f"Namespace: {item['namespace']}, Type: {item['name']}, Description: {truncate_text(item['description'], 200)}\n"
            for inh in item.get("inherent", [])[:3]:
                context += f" - {inh.get('Method', inh.get('Property', ''))}: {truncate_text(inh.get('Description', ''), 100)}\n"
        else:
            context += f"Interface: {item['name']}\n"
            for member in item["members"][:3]:
                context += f" - {member['name']}: {truncate_text(member['doc'], 100)}\n"
    
    context = truncate_text(context, 400 * 4)
    prompt = f"{context}\nQuestion: {query.text}\nAnswer with a brief explanation and a JavaScript code example:"
    try:
        response = llm(prompt, max_tokens=300)
        answer = response["choices"][0]["text"]
        sources = [item.get("name", item.get("url", "")) for item in relevant_data]
        save_cached_answer(query.text, answer, sources)
        return {"answer": answer, "sources": sources}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))        
        
        
        
        
        
        