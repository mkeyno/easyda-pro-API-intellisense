// TypeScript definitions for EasyDA Professional API
// Generated automatically

declare namespace System {
    /**
     * System / External Request Class
     * @see ./pro-api.sys_clienturl.html
     */
    /** Remark: Initiate a secure cURL request to an external server */
    /** Signature: export declare class SYS_ClientUrl */
    class SYS_ClientUrl {
        /**
         * Initiate an instant request
         * @see pro-api.sys_clienturl.request.html
         */
    /**
     * Fetch's return result
     * Note that cross-origin resource sharing (CORS) needs to be allowed on the requested site, otherwise the interface will always return an error result.
     * For more information, see Cross-origin Resource Sharing (CORS) - MDN.
     * Note: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        request(        /** Request address */
        url: string,         /** (Optional) Request method */
        method: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH',         /**
         * (Optional) The data sent by the request can be direct data or URLSearchParams object. If the method is HEAD or GET, this parameter will be ignored.
         * @see https://developer.mozilla.org/docs/Web/API/URLSearchParams
         */
        data: string | Blob | FormData | URLSearchParams,         /** (Optional) Request Parameters */
        options: { headers?: { [header: string]: any; }; integrity?: string; },         /** (Optional) Function that calls back after a successful request */
        succeedCallFn: (data: Response) => void | Promise<void>): Promise<Response>;
    }
    /**
     * System / Dialog Class
     * @see ./pro-api.sys_dialog.html
     */
    /** Remark: Generate dialog window */
    /** Signature: export declare class SYS_Dialog */
    class SYS_Dialog {
        /**
         * A confirmation window pops up
         * @see pro-api.sys_dialog.showconfirmationmessage.html
         */
    /** Shows a window with confirmation and cancel buttons */
        showConfirmationMessage(        /** Message text, support for use of \n line breaks */
        content: string,         /** (Optional) Popup window title */
        title: string,         /** (Optional) Main button title */
        mainButtonTitle: string,         /** (Optional) Main button title */
        buttonTitle: string,         /** (Optional) callback function */
        callbackFn: (mainButtonClicked: boolean) => void): void;
        /**
         * Popup message window
         * @see pro-api.sys_dialog.showinformationmessage.html
         */
    /** Display a text message window */
        showInformationMessage(        /** Message text, support for use of \n line breaks */
        content: string,         /** (Optional) Popup window title */
        title: string,         /** (Optional) Button title, if empty, no button is displayed */
        buttonTitle: string): void;
        /**
         * (BETA) Pop-up input window
         * @see pro-api.sys_dialog.showinputdialog.html
         */
    /** The value entered by the user is always of string type unless the user clicks the **Cancel** button */
        showInputDialog(        /** (Optional) Text above the input box */
        beforeContent: string,         /** (Optional) Text below the input box */
        afterContent: string,         /** (Optional) Popup window title */
        title: string,         /** (Optional) Input box type */
        type: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week',         /** (Optional) input box default value */
        value: string | number,         /**
         * (Optional) For other parameters, please refer to The HTML Input element.
         * @see https://developer.mozilla.org/docs/Web/HTML/Element/input#attributes
         */
        otherProperty: { max?: number; maxlength?: number; min?: number; minlength?: number; multiple?: boolean; pattern?: RegExp; placeholder?: string; readonly?: boolean; step?: number; },         /** (Optional) callback function */
        callbackFn: (value: any) => void): void;
        /**
         * (BETA) Selection window pops up
         * @see pro-api.sys_dialog.showselectdialog.html
         */
    /** The value selected by the user corresponds to the value field in the passed options */
        showSelectDialog(        /** The option list can be a string array or an object array. When defaultOption is not specified, the default value is the first item of the list; if it is a string array, the value of the option and the display content of the option will remain the same; if it is an object array, the value represents the value of the option, and the displayContent represents the display content of the option. */
        options: Array<string> | Array<{ value: string; displayContent: string; }>,         /** (Optional) Text above the selection box */
        beforeContent: string,         /** (Optional) Text below the selection box */
        afterContent: string,         /** (Optional) Select box title */
        title: string,         /** (Optional) Default option, the value of the option is used as the matching parameter. If the multiple parameter is true, a string array needs to be passed in here */
        defaultOption: string,         /** (Optional) Whether multiple selection is supported, the default is the radio box */
        multiple: false,         /** (Optional) callback function */
        callbackFn: (value: string) => void): void;
        /**
         * (BETA) Multiple selection window pops up
         * @see pro-api.sys_dialog.showselectdialog_1.html
         */
    /** The set array of values â€‹â€‹selected by the user, corresponding to the value field in the passed options */
        showSelectDialog(        /** The option list can be a string array or an object array. When defaultOption is not specified, the default value is the first item of the list; if it is a string array, the value of the option and the display content of the option will remain the same; if it is an object array, the value represents the value of the option, and the displayContent represents the display content of the option. */
        options: Array<string> | Array<{ value: string; displayContent: string; }>,         /** (Optional) Text above the multi-check box */
        beforeContent: string,         /** (Optional) Text below the multi-select box */
        afterContent: string,         /** (Optional) Multiple-choice box title */
        title: string,         /** (Optional) Default option array, with the value of the option as the matching parameter */
        defaultOption: Array<string>,         /** (Optional) Whether multiple selection is supported */
        multiple: true,         /** (Optional) callback function */
        callbackFn: (value: Array<string>) => void): void;
    }
    /**
     * System / Runtime Environment Class
     * @see ./pro-api.sys_environment.html
     */
    /** Remark: Obtain the operating environment parameters of the Jialichuang EDA Professional Edition */
    /** Signature: export declare class SYS_Environment */
    class SYS_Environment {
        /**
         * Get editor compilation date
         * @see pro-api.sys_environment.geteditorcomplieddate.html
         */
    /** Editor compilation date */
        getEditorCompliedDate(): string;
        /**
         * Get the current version of the editor
         * @see pro-api.sys_environment.geteditorcurrentversion.html
         */
    /** Current version of the editor */
        getEditorCurrentVersion(): string;
        /**
         * Is it in the client environment?
         * @see pro-api.sys_environment.isclient.html
         */
    /** Is it in the client environment? */
        isClient(): boolean;
        /**
         * Is it EasyEDA Pro version?
         * @see pro-api.sys_environment.iseasyedaproedition.html
         */
    /** Is it EasyEDA Pro version? */
        isEasyEDAProEdition(): boolean;
        /**
         * Is it semi-offline mode?
         * @see pro-api.sys_environment.ishalfofflinemode.html
         */
    /** Is it semi-offline mode? */
        isHalfOfflineMode(): boolean;
        /**
         * Is it a professional version of Jialichuang EDA
         * @see pro-api.sys_environment.isjlcedaproedition.html
         */
    /** Is it a professional version of Jialichuang EDA */
        isJLCEDAProEdition(): boolean;
        /**
         * Is it all offline mode?
         * @see pro-api.sys_environment.isofflinemode.html
         */
    /** Is it all offline mode? */
        isOfflineMode(): boolean;
        /**
         * Is it online mode?
         * @see pro-api.sys_environment.isonlinemode.html
         */
    /** Is it online mode? */
        isOnlineMode(): boolean;
        /**
         * Is it a private version deployed?
         * @see pro-api.sys_environment.isproprivateedition.html
         */
    /** Is it a private version deployed? */
        isProPrivateEdition(): boolean;
        /**
         * Is it in the browser environment?
         * @see pro-api.sys_environment.isweb.html
         */
    /** Is it in the browser environment? */
        isWeb(): boolean;
    }
    /**
     * System / File Management Class
     * @see ./pro-api.sys_filemanager.html
     */
    /** Signature: export declare class SYS_FileManager */
    class SYS_FileManager {
        /**
         * (BETA) Use multiplexed module UUID to get multiplexed module files
         * @see pro-api.sys_filemanager.getcbbfilebycbbuuid.html
         */
    /**
     * Reuse module file data, undefined means data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Team Module > Download Module** permissions. Calls without permission will always throw Error
     */
        getCbbFileByCbbUuid(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) */
        cbbName: string,         /** (Optional) Encryption password */
        password: string): Promise<File | undefined>;
        /**
         * Get device files using device UUID
         * @see pro-api.sys_filemanager.getdevicefilebydeviceuuid.html
         */
    /**
     * Device file data, undefined means data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Team Library > Download Library** permissions. Calls without permission will always throw Error
     */
        getDeviceFileByDeviceUuid(        /** Device UUID or Device UUID List */
        deviceUuid: string | Array<string>,         /**
         * (Optional) library UUID can be obtained using the interface in LIB_LibrariesList. If it is not passed in, it is the system library
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<File | undefined>;
        /**
         * Get the document file
         * @see pro-api.sys_filemanager.getdocumentfile.html
         */
    /**
     * Document file data, undefined means that the document is not currently opened or the data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the ** Engineering Drawing > File Export** permission. Calls without permission will always throw Error
     */
        getDocumentFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) Encryption password */
        password: string): Promise<File | undefined>;
        /**
         * (BETA) Obtain document encapsulation source code
         * @see pro-api.sys_filemanager.getdocumentfootprintsources.html
         */
    /** Document encapsulates source code data, data acquisition fails to return to an empty array */
        getDocumentFootprintSources(): Promise<Array<{ footprintUuid: string; documentSource: string; }>>;
        /**
         * (BETA) Obtain document source code
         * @see pro-api.sys_filemanager.getdocumentsource.html
         */
    /** Document source code data, undefined means that the document is not opened or the data acquisition failed */
        getDocumentSource(): Promise<string | undefined>;
        /**
         * (BETA) Get encapsulated files using encapsulated UUID
         * @see pro-api.sys_filemanager.getfootprintfilebyfootprintuuid.html
         */
    /**
     * Encapsulate file data, undefined means data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Team Library > Download Library** permissions. Calls without permission will always throw Error
     */
        getFootprintFileByFootprintUuid(        /** Encapsulate UUID or encapsulate UUID list */
        footprintUuid: string | Array<string>,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<File | undefined>;
        /**
         * (BETA) Use the Panel Library UUID to obtain the panel library file
         * @see pro-api.sys_filemanager.getpanellibraryfilebypanellibraryuuid.html
         */
    /**
     * Panel library file data, undefined means data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Team Library > Download Library** permissions. Calls without permission will always throw Error
     */
        getPanelLibraryFileByPanelLibraryUuid(        /** Panel Library UUID or Panel Library UUID List */
        panelLibraryUuid: string | Array<string>,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<File | undefined>;
        /**
         * Obtain project files
         * @see pro-api.sys_filemanager.getprojectfile.html
         */
    /**
     * Project file data, undefined means that the project is not currently opened or the data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Project Management > Download Project** permission. Calls without permission will always throw Error
     */
        getProjectFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) Encryption password */
        password: string): Promise<File | undefined>;
        /**
         * Use project UUID to get project files
         * @see pro-api.sys_filemanager.getprojectfilebyprojectuuid.html
         */
    /**
     * Project file data, undefined means that the project is not currently opened or the data acquisition failed
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * Note: This interface requires the **Project Management > Download Project** permission. Calls without permission will always throw Error
     */
        getProjectFileByProjectUuid(        /** Project UUID */
        projectUuid: string,         /** (Optional) File name */
        fileName: string,         /** (Optional) Encryption password */
        password: string): Promise<File | undefined>;
        /**
         * (BETA) Modify the document source code
         * @see pro-api.sys_filemanager.setdocumentsource.html
         */
    /** Whether the modification is successful, if the input document source code format is incorrect, the result of false will be returned */
        setDocumentSource(        /** Document source code */
        source: string): Promise<boolean>;
    }
    /**
     * System / File System Interaction Class
     * @see ./pro-api.sys_filesystem.html
     */
    /** Signature: export declare class SYS_FileSystem */
    class SYS_FileSystem {
        /**
         * (BETA) Delete files in the file system
         * @see pro-api.sys_filesystem.deletefileinfilesystem.html
         */
    /**
     * Is the deletion operation successful?
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        deleteFileInFileSystem(        /** File resource locator If the end is slash / (Windows is backslash \), it is recognized as a folder; if the end is not slash, it is recognized as the full file name, and the fileName parameter will be ignored at this time */
        uri: string,         /** (Optional) Forced delete a folder (whether to force delete the folder when the folder is to be deleted and there are files in it) */
        force: boolean): Promise<boolean>;
        /**
         * (BETA) Get the document directory path
         * @see pro-api.sys_filesystem.getdocumentspath.html
         */
    /**
     * Document directory path
     * The path returned does not contain a slash / (or a backslash \) at the end
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        getDocumentsPath(): Promise<string>;
        /**
         * (BETA) Get the EDA document directory path
         * @see pro-api.sys_filesystem.getedapath.html
         */
    /**
     * EDA Document Directory Path
     * The path returned does not contain a slash / (or a backslash \) at the end
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        getEdaPath(): Promise<string>;
        /**
         * Get files within the extension
         * @see pro-api.sys_filesystem.getextensionfile.html
         */
    /** File format file */
        getExtensionFile(        /** File path */
        uri: string): Promise<File | undefined>;
        /**
         * (BETA) Get the library directory path
         * @see pro-api.sys_filesystem.getlibrariespaths.html
         */
    /**
     * Library directory path array
     * Note 1: This interface is only valid for all offline clients, and calls in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        getLibrariesPaths(): Promise<Array<string>>;
        /**
         * (BETA) Get the project directory path
         * @see pro-api.sys_filesystem.getprojectspaths.html
         */
    /**
     * Project directory path array
     * Note 1: This interface is only valid for offline clients, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        getProjectsPaths(): Promise<Array<string>>;
        /**
         * (BETA) View the file list under the file system path
         * @see pro-api.sys_filesystem.listfilesoffilesystem.html
         */
    /**
     * List of files in the current directory
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        listFilesOfFileSystem(        /** Directory path */
        folderPath: string,         /** (Optional) Whether to recursively obtain all subfiles */
        recursive: boolean): Promise<Array<ISYS_FileSystemFileList>>;
        /**
         * (BETA) Opens the read file window
         * @see pro-api.sys_filesystem.openreadfiledialog.html
         */
    /** File format file */
        openReadFileDialog(        /** (Optional) File extension */
        filenameExtensions: string | Array<string>): Promise<File | undefined>;
        /**
         * (BETA) Read files from file system
         * @see pro-api.sys_filesystem.readfilefromfilesystem.html
         */
    /**
     * File format file
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        readFileFromFileSystem(        /** File resource locator, need to contain the absolute path of the complete file name */
        uri: string): Promise<File | undefined>;
        /**
         * Save the file
         * @see pro-api.sys_filesystem.savefile.html
         */
    /** Call the browser download interface or Electron to save the file interface to save the incoming file stream to the local */
        saveFile(        /** File data */
        fileData: File | Blob,         /** (Optional) File name */
        fileName: string): Promise<void>;
        /**
         * (BETA) Write files to the file system
         * @see pro-api.sys_filesystem.savefiletofilesystem.html
         */
    /**
     * Whether the write operation is successful, if overwriting is not allowed but the file already exists, the result of false will be returned
     * Note 1: This interface is only valid on the client side, and calling in the browser environment will always throw Error
     * Note 2: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        saveFileToFileSystem(        /** File resource locator If the end is slash / (Windows is backslash \), it is recognized as a folder; if the end is not slash, it is recognized as the full file name, and the fileName parameter will be ignored at this time */
        uri: string,         /** File data */
        fileData: File | Blob,         /** (Optional) File name */
        fileName: string,         /** (Optional) Forced write (overwrite the file if it exists) */
        force: boolean): Promise<boolean>;
    }
    /**
     * System / Font Management Class
     * @see ./pro-api.sys_fontmanager.html
     */
    /** Remark: Configure the list of system fonts allowed by EDA Professional Edition */
    /** Signature: export declare class SYS_FontManager */
    class SYS_FontManager {
        /**
         * Add fonts to font list
         * @see pro-api.sys_fontmanager.addfont.html
         */
    /** Is the addition operation successful? */
        addFont(        /** Font name */
        fontName: string): Promise<boolean>;
        /**
         * Delete the specified font in the font list
         * @see pro-api.sys_fontmanager.deletefont.html
         */
    /** Is the deletion operation successful? */
        deleteFont(        /** Font name */
        fontName: string): Promise<boolean>;
        /**
         * Get the currently configured font list
         * @see pro-api.sys_fontmanager.getfontslist.html
         */
    /** Font list */
        getFontsList(): Promise<Array<string>>;
    }
    /**
     * System / Multilingual Class
     * @see ./pro-api.sys_i18n.html
     */
    /** Remark: Display multilingual text using multilingual systems */
    /** Signature: export declare class SYS_I18n */
    class SYS_I18n {
        /**
         * Query all supported languages
         * @see pro-api.sys_i18n.getallsupportedlanguages.html
         */
    /** List of all supported languages */
        getAllSupportedLanguages(): Array<string>;
        /**
         * Get the current locale
         * @see pro-api.sys_i18n.getcurrentlanguage.html
         */
    /**
     * language
     * The languages â€‹â€‹that can be obtained are limited by the current language supported by EDA. Languages â€‹â€‹supported by other APIs need to explicitly specify the language parameters to be used.
     */
        getCurrentLanguage(): Promise<string>;
        /**
         * Import multilingual
         * @see pro-api.sys_i18n.importmultilingual.html
         */
    /**
     * Is the import successful?
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        importMultilingual(        /** language */
        language: string,         /**
         * Multilingual data object to be imported
         * @see pro-api.isys_languagekeyvaluepairs.html
         */
        source: ISYS_LanguageKeyValuePairs): boolean;
        /**
         * Import multilingual: Specify namespace and language
         * @see pro-api.sys_i18n.importmultilinguallanguage.html
         */
    /** Is the import successful? */
        importMultilingualLanguage(        /** Namespace */
        namespace: string,         /** language */
        language: string,         /**
         * Multilingual data object to be imported
         * @see pro-api.isys_languagekeyvaluepairs.html
         */
        source: ISYS_LanguageKeyValuePairs): boolean;
        /**
         * Import multilingual: Specify namespace
         * @see pro-api.sys_i18n.importmultilingualnamespace.html
         */
    /** Is the import successful? */
        importMultilingualNamespace(        /** Namespace */
        namespace: string,         /**
         * Multilingual data object to be imported
         * @see pro-api.isys_multilinguallanguagesdata.html
         */
        source: ISYS_MultilingualLanguagesData): boolean;
        /**
         * Check if the language is supported
         * @see pro-api.sys_i18n.islanguagesupported.html
         */
    /** Supported */
        isLanguageSupported(        /** language */
        language: string): boolean;
        /**
         * Output language text
         * @see pro-api.sys_i18n.text.html
         */
    /**
     * Language text
     * You can use placeholders in the ${1} format to represent parameters;
     * Language priority: Current display language > System default language > The first language found in the dataset containing the text tag > Text tag (tag)
     */
        text(        /** Text tags, corresponding to the keys in multilingual file key-value pairs */
        tag: string,         /** (Optional) Text namespace, which defaults to the extended UUID in the extended running environment, otherwise it is the system default namespace */
        namespace: string,         /** (Optional) language, undefined is the current display language of EDA */
        language: string,         /** Parameters for replacing placeholders in language text */
        args: Array<any>): string;
    }
    /**
     * System / Inline Frame Window Class
     * @see ./pro-api.sys_iframe.html
     */
    /** Signature: export declare class SYS_IFrame */
    class SYS_IFrame {
        /**
         * (BETA) Close the inline frame window
         * @see pro-api.sys_iframe.closeiframe.html
         */
    /**
     * Is the operation successful?
     * Close all inline frame windows opened by the current extension;
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        closeIFrame(        /** (Optional) Inline frame window ID, if undefined is passed, all inline frame windows opened by this extension will be closed */
        id: string): Promise<boolean>;
        /**
         * (BETA) Hide inline frame window
         * @see pro-api.sys_iframe.hideiframe.html
         */
    /**
     * Is the operation successful?
     * This interface is result-oriented: If the specified inline frame window is not found, the interface will return false; If the inline frame window is already hidden before the operation is performed, the interface will return true
     */
        hideIFrame(        /** (Optional) Inline Frame Window ID */
        id: string): Promise<boolean>;
        /**
         * (BETA) Opens an inline frame window
         * @see pro-api.sys_iframe.openiframe.html
         */
    /**
     * Is the operation successful?
     * This interface only allows calls to the extension package, and users need to include HTML files for inline in the extension package;
     * After this interface is called, a Dialog window will open. The title is <title> of the HTML file and the title bar has a close button;
     * The text part is an inline framework, and width and height are the width and height of the inline framework in the text part;
     * The inline framework needs to display the content of htmlFileName, which is retrieved from the extension package and stored in IndexedDB during installation
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        openIFrame(        /** The path of the HTML file to be loaded in the extension package */
        htmlFileName: string,         /** (Optional) Width of an inline frame window */
        width: number,         /** (Optional) height of inline frame window */
        height: number,         /** (Optional) Inline frame window ID, used to close the inline frame window */
        id: string): Promise<boolean>;
        /**
         * (BETA) Displays an inline frame window
         * @see pro-api.sys_iframe.showiframe.html
         */
    /**
     * Is the operation successful?
     * This interface is result-oriented: If the specified inline frame window is not found, the interface will return false; If the inline frame window is already displayed before the operation is performed, the interface will return true
     */
        showIFrame(        /** (Optional) Inline Frame Window ID */
        id: string): Promise<boolean>;
    }
    /**
     * System / Loading and Progress Bar Class
     * @see ./pro-api.sys_loadingandprogressbar.html
     */
    /** Signature: export declare class SYS_LoadingAndProgressBar */
    class SYS_LoadingAndProgressBar {
        /**
         * Destroy no progress load coverage
         * @see pro-api.sys_loadingandprogressbar.destroyloading.html
         */
        destroyLoading(): void;
        /**
         * Destruction progress bar
         * @see pro-api.sys_loadingandprogressbar.destroyprogressbar.html
         */
        destroyProgressBar(): void;
        /**
         * Show no progress loading overwrite
         * @see pro-api.sys_loadingandprogressbar.showloading.html
         */
    /** There is no progress indication, but there will be a gray coverage consistent with the progress bar, preventing users from further operations */
        showLoading(): void;
        /**
         * Show progress bar or set progress bar
         * @see pro-api.sys_loadingandprogressbar.showprogressbar.html
         */
    /** When the progress reaches 100, the progress bar will be automatically destroyed */
        showProgressBar(        /** (Optional) Progress value, value range 0-100 */
        progress: number,         /** (Optional) Progress bar title */
        title: string): void;
    }
    /**
     * System / Log Class
     * @see ./pro-api.sys_log.html
     */
    /** Signature: export declare class SYS_Log */
    class SYS_Log {
        /**
         * Add log entry
         * @see pro-api.sys_log.add.html
         */
        add(        /** Log content */
        message: string,         /**
         * (Optional) Log Type
         * @see pro-api.esys_logtype.html
         */
        type: ESYS_LogType): void;
        /**
         * Clear the log
         * @see pro-api.sys_log.clear.html
         */
        clear(): void;
        /**
         * Export log
         * @see pro-api.sys_log.export.html
         */
        export(        /**
         * (Optional) Log Type
         * @see pro-api.esys_logtype.html
         */
        types: ESYS_LogType | Array<ESYS_LogType>): void;
        /**
         * Find an entry
         * @see pro-api.sys_log.find.html
         */
    /**
     * Array of log entries that meet the search criteria
     * If the log panel is open, the search operation will be displayed on the front end at the same time.
     */
        find(        /** Find content */
        message: string | Array<string | { text: string; attr?: { id?: string; path?: string; sheet?: string; pcbid?: string; type?: string; }; }>,         /**
         * (Optional) Array of log types that can be found within the specified log type
         * @see pro-api.esys_logtype.html
         */
        types: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
        /**
         * Filter and get log entries
         * @see pro-api.sys_log.sort.html
         */
    /**
     * Array of log entries that meet the filter criteria
     * If the log panel is open, the filtering operation will also be displayed on the front end.
     */
        sort(        /**
         * (Optional) Log type array, you can specify multiple log types at the same time, if not specified, it is all types
         * @see pro-api.esys_logtype.html
         */
        types: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
    }
    /**
     * System / Message Notification Class
     * @see ./pro-api.sys_message.html
     */
    /** Remark: Generate various non-invasive reminders to users */
    /** Signature: export declare class SYS_Message */
    class SYS_Message {
        /**
         * (BETA) Remove the prompt to follow the mouse
         * @see pro-api.sys_message.removefollowmousetip.html
         */
    /** Remove the current or specified prompt to follow the mouse */
        removeFollowMouseTip(        /** (Optional) Prompt content, if passed in, it will only be removed if the current prompt is specified */
        tip: string): Promise<void>;
        /**
         * (BETA) Shows tips for following the mouse
         * @see pro-api.sys_message.showfollowmousetip.html
         */
    /** Only one prompt can be displayed at the same time. If a new prompt is displayed, the previous prompt will be automatically removed. */
        showFollowMouseTip(        /** Prompt content */
        tip: string,         /**
         * (Optional) Display time, in milliseconds (ms), if not passed in, it will continue to display until the call to removeFollowMouseTip or is overwritten by other prompts
         * @see pro-api.sys_message.removefollowmousetip.html
         */
        msTimeout: number): Promise<void>;
        /**
         * Show toast message
         * @see pro-api.sys_message.showtoastmessage.html
         */
        showToastMessage(        /** Message content */
        message: string,         /**
         * (Optional) Message Type
         * @see pro-api.esys_toastmessagetype.html
         */
        messageType: ESYS_ToastMessageType,         /** (Optional) Automatically close countdown seconds, 0 is not automatically closed */
        timer: number,         /**
         * (Optional) Expand the bottom information panel
         * @see pro-api.esys_bottompaneltab.html
         */
        bottomPanel: ESYS_BottomPanelTab,         /** (Optional) Callback Button Title */
        buttonTitle: string,         /** (Optional) The content of the callback function, in the form of a string, will be automatically parsed and executed */
        buttonCallbackFn: string): void;
    }
    /**
     * System / Panel Control Class
     * @see ./pro-api.sys_panelcontrol.html
     */
    /** Signature: export declare class SYS_PanelControl */
    class SYS_PanelControl {
        /**
         * Close the bottom panel
         * @see pro-api.sys_panelcontrol.closebottompanel.html
         */
        closeBottomPanel(): void;
        /**
         * Close the left panel
         * @see pro-api.sys_panelcontrol.closeleftpanel.html
         */
        closeLeftPanel(): void;
        /**
         * Close the right panel
         * @see pro-api.sys_panelcontrol.closerightpanel.html
         */
        closeRightPanel(): void;
        /**
         * Check if the bottom panel is locked
         * @see pro-api.sys_panelcontrol.isbottompanellocked.html
         */
    /** Is it locked */
        isBottomPanelLocked(): Promise<boolean>;
        /**
         * Check whether the left panel is locked
         * @see pro-api.sys_panelcontrol.isleftpanellocked.html
         */
    /** Is it locked */
        isLeftPanelLocked(): Promise<boolean>;
        /**
         * Check if the right panel is locked
         * @see pro-api.sys_panelcontrol.isrightpanellocked.html
         */
    /** Is it locked */
        isRightPanelLocked(): Promise<boolean>;
        /**
         * Open the bottom panel
         * @see pro-api.sys_panelcontrol.openbottompanel.html
         */
        openBottomPanel(        /**
         * (Optional) tab page, if not specified, do not switch tab pages
         * @see pro-api.esys_bottompaneltab.html
         */
        tab: ESYS_BottomPanelTab): void;
        /**
         * Open the left panel
         * @see pro-api.sys_panelcontrol.openleftpanel.html
         */
        openLeftPanel(        /**
         * (Optional) tab page, if not specified, do not switch tab pages
         * @see pro-api.esys_leftpaneltab.html
         */
        tab: ESYS_LeftPanelTab): void;
        /**
         * Open the right panel
         * @see pro-api.sys_panelcontrol.openrightpanel.html
         */
        openRightPanel(        /**
         * (Optional) tab page, if not specified, do not switch tab pages
         * @see pro-api.esys_rightpaneltab.html
         */
        tab: ESYS_RightPanelTab): void;
        /**
         * Switch the bottom panel lock status
         * @see pro-api.sys_panelcontrol.togglebottompanellockstate.html
         */
        toggleBottomPanelLockState(        /** (Optional) Whether to lock, if not specified, the current state is reversed */
        state: boolean): void;
        /**
         * Switch the locked state of the left panel
         * @see pro-api.sys_panelcontrol.toggleleftpanellockstate.html
         */
        toggleLeftPanelLockState(        /** (Optional) Whether to lock, if not specified, the current state is reversed */
        state: boolean): void;
        /**
         * Switch the locked state of the right panel
         * @see pro-api.sys_panelcontrol.togglerightpanellockstate.html
         */
        toggleRightPanelLockState(        /** (Optional) Whether to lock, if not specified, the current state is reversed */
        state: boolean): void;
    }
    /**
     * System / Shortcut Key Class
     * @see ./pro-api.sys_shortcutkey.html
     */
    /** Remark: Registration and Management System Shortcut Keys */
    /** Signature: export declare class SYS_ShortcutKey */
    class SYS_ShortcutKey {
        /**
         * (BETA) Query shortcut key list
         * @see pro-api.sys_shortcutkey.getshortcutkeys.html
         */
    /** Shortcut key list */
        getShortcutKeys(        /** (Optional) Whether to include system shortcut keys */
        includeSystem: boolean): Promise<Array<{ shortcutKey: TSYS_ShortcutKeys; title: string; documentType: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>; scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>; }>>;
        /**
         * (BETA) Registration shortcut keys
         * @see pro-api.sys_shortcutkey.registershortcutkey.html
         */
    /** Is the registration operation successful? */
        registerShortcutKey(        /**
         * Shortcut keys, if multiple elements are included in the array, they will be parsed into combination shortcut keys, and will be sorted by rules and stored in the cache.
         * @see pro-api.tsys_shortcutkeys.html
         */
        shortcutKey: TSYS_ShortcutKeys,         /** Shortcut key title, friendly name of shortcut key */
        title: string,         /**
         * Callback function
         * @see pro-api.tsys_shortcutkeys.html
         */
        callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>,         /**
         * (Optional)
         * @see pro-api.esys_shortcutkeyeffectiveeditordocumenttype.html
         */
        documentType: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>,         /**
         * (Optional)
         * @see pro-api.esys_shortcutkeyeffectiveeditorscene.html
         */
        scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;
        /**
         * (BETA) Anti-registration shortcut key
         * @see pro-api.sys_shortcutkey.unregistershortcutkey.html
         */
    /** Is the anti-registration operation successful? */
        unregisterShortcutKey(        /**
         * Shortcut keys, which do not distinguish the incoming arrangement order, will automatically sort and query matching shortcut keys.
         * @see pro-api.tsys_shortcutkeys.html
         */
        shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;
    }
    /**
     * System / Storage Class
     * @see ./pro-api.sys_storage.html
     */
    /** Remark: Operation interfaces that can be extended with user configuration storage and browser local storage */
    /** Signature: export declare class SYS_Storage */
    class SYS_Storage {
        /**
         * Clear Extended All User Configurations
         * @see pro-api.sys_storage.clearextensionalluserconfigs.html
         */
    /**
     * Is the operation successful?
     * This will delete all user configuration information of the current extension. Please be cautious
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        clearExtensionAllUserConfigs(): Promise<boolean>;
        /**
         * Delete extended user configuration
         * @see pro-api.sys_storage.deleteextensionuserconfig.html
         */
    /**
     * Is the operation successful?
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        deleteExtensionUserConfig(        /** Configuration Items */
        key: string): Promise<boolean>;
        /**
         * Get extended all user configurations
         * @see pro-api.sys_storage.getextensionalluserconfigs.html
         */
    /**
     * Extend all user configuration information
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        getExtensionAllUserConfigs(): { [key: string]: any; };
        /**
         * Get extended user configuration
         * @see pro-api.sys_storage.getextensionuserconfig.html
         */
    /**
     * The value corresponding to the configuration item will return undefined if it does not exist.
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        getExtensionUserConfig(        /** Configuration Items */
        key: string): any | undefined;
        /**
         * Settings to extend all user configurations
         * @see pro-api.sys_storage.setextensionalluserconfigs.html
         */
    /**
     * Is the operation successful?
     * This move will cover all user configuration information of the current extension. Please be cautious
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        setExtensionAllUserConfigs(        /** Extend all user configurations */
        configs: { [key: string]: any; }): Promise<boolean>;
        /**
         * Set up extended user configuration
         * @see pro-api.sys_storage.setextensionuserconfig.html
         */
    /**
     * Is the operation successful?
     * This interface is also used to create a new extension user configuration. If it does not exist during setting, it will be automatically created.
     * Note: This interface only extends to be valid, and calls within a standalone script environment will always throw Error
     */
        setExtensionUserConfig(        /** Configuration Items */
        key: string,         /** value */
        value: any): Promise<boolean>;
    }
    /**
     * System / Timer Class
     * @see ./pro-api.sys_timer.html
     */
    /** Remark: Set the timer */
    /** Signature: export declare class SYS_Timer */
    class SYS_Timer {
        /**
         * Clear the specified loop timer
         * @see pro-api.sys_timer.clearintervaltimer.html
         */
    /** Whether the timer is cleared successfully */
        clearIntervalTimer(        /** Timer ID */
        id: string): boolean;
        /**
         * Clear the specified single timer
         * @see pro-api.sys_timer.cleartimeouttimer.html
         */
    /** Whether the timer is cleared successfully */
        clearTimeoutTimer(        /** Timer ID */
        id: string): boolean;
        /**
         * Set the loop timer
         * @see pro-api.sys_timer.setintervaltimer.html
         */
    /**
     * Is the timer set successfully?
     * If a timer with duplicate ID is encountered, the previously set timer will be cleared
     */
        setIntervalTimer(        /** Timer ID, used to locate & delete timer */
        id: string,         /** Time time, unit ms */
        timeout: number,         /** Calling functions at regular intervals */
        callFn: (...args: any) => void,         /** Pass the parameters of the function called at a time */
        args: any): boolean;
        /**
         * Set a single timer
         * @see pro-api.sys_timer.settimeouttimer.html
         */
    /**
     * Is the timer set successfully?
     * If a timer with duplicate ID is encountered, the previously set timer will be cleared
     */
        setTimeoutTimer(        /** Timer ID */
        id: string,         /** Time time, unit ms */
        timeout: number,         /** Calling functions at regular intervals */
        callFn: (...args: any) => void,         /** Pass the parameters of the function called at a time */
        args: any): boolean;
    }
    /**
     * System / Unit Class
     * @see ./pro-api.sys_unit.html
     */
    /** Remark: Control the basic function of the data unit and unit conversion of the system, the current system data unit span is equivalent to mil */
    /** Signature: export declare class SYS_Unit */
    class SYS_Unit {
        /**
         * Obtain API system data unit span
         * @see pro-api.sys_unit.getsystemdataunit.html
         */
    /**
     * unit
     * The current API system data unit span is equivalent to mil and will not change
     */
        getSystemDataUnit(): ESYS_Unit.MIL;
        /**
         * Unit conversion: inches to mile
         * @see pro-api.sys_unit.inchtomil.html
         */
    /** Output Mill Number */
        inchToMil(        /** Enter the number of inches */
        inch: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
        /**
         * Unit conversion: inches to millimeters
         * @see pro-api.sys_unit.inchtomm.html
         */
    /** Output millimeters */
        inchToMm(        /** Enter the number of inches */
        inch: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
        /**
         * Unit conversion: mil to inches
         * @see pro-api.sys_unit.miltoinch.html
         */
    /** Output inches */
        milToInch(        /** Enter the number of miles */
        mil: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
        /**
         * Unit conversion: mil to millimeters
         * @see pro-api.sys_unit.miltomm.html
         */
    /** Output millimeters */
        milToMm(        /** Enter the number of miles */
        mil: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
        /**
         * Unit conversion: mm to inches
         * @see pro-api.sys_unit.mmtoinch.html
         */
    /** Output inches */
        mmToInch(        /** Enter the millimeter number */
        mm: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
        /**
         * Unit conversion: mm to mil
         * @see pro-api.sys_unit.mmtomil.html
         */
    /** Output Mill Number */
        mmToMil(        /** Enter the millimeter number */
        mm: number,         /** (Optional) Reserved decimal places, default to 4 */
        numberOfDecimals: number): number;
    }
    /**
     * System / WebSocket Class
     * @see ./pro-api.sys_websocket.html
     */
    /** Remark: Interact with WebSocket Server */
    /** Signature: export declare class SYS_WebSocket */
    class SYS_WebSocket {
        /**
         * Close WebSocket Connection
         * @see pro-api.sys_websocket.close.html
         */
    /** Note: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error. */
        close(        /** Custom WebSocket ID */
        id: string,         /**
         * (Optional) Digital status code, corresponding to the allowed status code in WebSocket.CloseEvent
         * @see https://developer.mozilla.org/docs/Web/API/CloseEvent/code
         */
        code: number,         /** (Optional) A human-readable string explaining why the connection is closed */
        reason: string,         /** (Optional) Extended UUIDs are generally not required to be specified. They only need to be specified as the UUIDs of other extensions when they need to operate the WebSocket connection established by other extensions. */
        extensionUuid: string): void;
        /**
         * Register a WebSocket connection
         * @see pro-api.sys_websocket.register.html
         */
    /**
     * It can be used to detect whether the WebSocket connection is normal before execution, but be careful not to try connections with different parameters with the same ID**, which can cause confusion: If a WebSocket connection with a specified ID and is in an active state, the changes to the remaining parameters will not be applied.
     * Note: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error.
     */
        register(        /** Customize WebSocket ID */
        id: string,         /** WebSocket Service Address */
        serviceUri: string,         /** (Optional) Callback function when a message is received */
        receiveMessageCallFn: (event: MessageEvent<any>) => void | Promise<void>,         /** (Optional) Callback function when connection is established */
        connectedCallFn: () => void | Promise<void>,         /** (Optional) Subprotocol */
        protocols: string | Array<string>): void;
        /**
         * Send data to the WebSocket server
         * @see pro-api.sys_websocket.send.html
         */
    /** Note: This interface requires the user to enable extended external interaction permissions. If not enabled, it will always throw Error. */
        send(        /** Custom WebSocket ID */
        id: string,         /** Sent data */
        data: string | ArrayBuffer | Blob | ArrayBufferView,         /** (Optional) Extended UUIDs are generally not required to be specified. They only need to be specified as the UUIDs of other extensions when they need to operate the WebSocket connection established by other extensions. */
        extensionUuid: string): void;
    }
    /**
     * System / Window Class
     * @see ./pro-api.sys_window.html
     */
    /** Remark: To ensure security, only limited window jump and listening support is provided. For more operations, please use the inline frame window SYS_IFrame */
    /** Signature: export declare class SYS_Window */
    class SYS_Window {
        /**
         * (BETA) Added event monitoring
         * @see pro-api.sys_window.addeventlistener.html
         */
    /** Event listening method, used to remove event listening. If undefined, it means that the event listening failed to create */
        addEventListener(        /**
         * Event type, currently supports blur focus
         * @see pro-api.esys_windoweventtype.html
         */
        type: ESYS_WindowEventType,         /** Event listening callback */
        listener: (ev: any) => any,         /** (Optional) Optional parameters */
        options: { capture?: boolean; once?: boolean; passive?: boolean; signal?: AbortSignal; }): ISYS_WindowEventListenerRemovableObject | undefined;
        /**
         * Get the current topic
         * @see pro-api.sys_window.getcurrenttheme.html
         */
    /**
     * Current topic
     * Get the current EDA theme, **Light** or **Dark**
     */
        getCurrentTheme(): Promise<ESYS_Theme>;
        /**
         * (BETA) Open the resource window
         * @see pro-api.sys_window.open.html
         */
        open(        /** The URL or path to load the resource */
        url: string,         /**
         * (Optional) context target
         * @see pro-api.esys_windowopentarget.html
         */
        target: ESYS_WindowOpenTarget): void;
        /**
         * (BETA) Remove event listening
         * @see pro-api.sys_window.removeeventlistener.html
         */
        removeEventListener(        /**
         * Window event listening removes objects
         * @see pro-api.isys_windoweventlistenerremovableobject.html
         */
        removableObject: ISYS_WindowEventListenerRemovableObject): void;
    }
    /**
     * File System File Path
     * @see ./pro-api.isys_filesystemfilelist.html
     */
    /** Signature: export interface ISYS_FileSystemFileList */
    interface ISYS_FileSystemFileList {
        /**
         * File name (no slashes before and after)
         * @see pro-api.isys_filesystemfilelist.filename.html
         */
        fileName: string;
        /**
         * Full path, absolute path containing filename
         * @see pro-api.isys_filesystemfilelist.fullpath.html
         */
        fullPath: string;
        /**
         * Is it a directory?
         * @see pro-api.isys_filesystemfilelist.isdirectory.html
         */
        isDirectory: boolean;
        /**
         * (Optional) Relative path, does not contain the previous incoming path and file name (when there is no incoming path, there is no relative path), and there are no slashes in front and back
         * @see pro-api.isys_filesystemfilelist.relativepath.html
         */
        relativePath?: string;
        /**
         * (Optional) Directory subfile
         * @see pro-api.isys_filesystemfilelist.html
         */
        subFiles?: Array<ISYS_FileSystemFileList>;
    }
    /**
     * Language Data Key-Value Pairs
     * @see ./pro-api.isys_languagekeyvaluepairs.html
     */
    /** Remark: Single language data */
    /** Signature: export interface ISYS_LanguageKeyValuePairs */
    interface ISYS_LanguageKeyValuePairs {
    }
    /**
     * Multilingual Data
     * @see ./pro-api.isys_multilinguallanguagesdata.html
     */
    /** Remark: Contains data from multiple languages â€‹â€‹under the same namespace */
    /** Signature: export interface ISYS_MultilingualLanguagesData */
    interface ISYS_MultilingualLanguagesData {
    }
    /**
     * Log Line
     * @see ./pro-api.isys_logline.html
     */
    /** Signature: export interface ISYS_LogLine */
    interface ISYS_LogLine {
        /**
         * Log content
         * @see pro-api.isys_logline.message.html
         */
        message: string;
        /**
         * Timestamp
         * @see pro-api.isys_logline.timestamp.html
         */
        timestamp: number;
        /**
         * Log Type
         * @see pro-api.esys_logtype.html
         */
        type: ESYS_LogType;
    }
    /**
     * Window Event Listener Removable Object
     * @see ./pro-api.isys_windoweventlistenerremovableobject.html
     */
    /** Remark: This object is obtained from addEventListener and can be used to remove created event listening. You only need to pass it into removeEventListener */
    /** Signature: export interface ISYS_WindowEventListenerRemovableObject */
    interface ISYS_WindowEventListenerRemovableObject {
        listener: (ev: any) => any;
        /**
         * (Optional)
         * @see pro-api.isys_windoweventlistenerremovableobject.options.html
         */
        options?: { capture?: boolean; };
        type: ESYS_WindowEventType;
    }
    /**
     * Log Type
     * @see ./pro-api.esys_logtype.html
     */
    /** Signature: export declare enum ESYS_LogType */
    enum ESYS_LogType {
        /** mistake */
        ERROR = "error",
        /** Fatal error */
        FATAL_ERROR = "fatalError",
        /** information */
        INFO = "info",
        /** warn */
        WARNING = "warn",
    }
    /**
     * Toast Message Type
     * @see ./pro-api.esys_toastmessagetype.html
     */
    /** Signature: export declare enum ESYS_ToastMessageType */
    enum ESYS_ToastMessageType {
        /** Inquiry */
        ASK = "question",
        /** mistake */
        ERROR = "error",
        /** information */
        INFO = "info",
        /** success */
        SUCCESS = "success",
        /** warn */
        WARNING = "warn",
    }
    /**
     * Bottom Panel Tab
     * @see ./pro-api.esys_bottompaneltab.html
     */
    /** Signature: export declare enum ESYS_BottomPanelTab */
    enum ESYS_BottomPanelTab {
        /** Find results */
        FIND = "findResult",
        /** Library */
        LIBRARY = "library",
        /** log */
        LOG = "log",
        /** PCBï¼ڑDRC */
        PCB_DRC = "drcResult",
        /** Schematic: DRC */
        SCHEMATIC_DRC = "schDrcResult",
    }
    /**
     * Left Panel Tab
     * @see ./pro-api.esys_leftpaneltab.html
     */
    /** Signature: export declare enum ESYS_LeftPanelTab */
    enum ESYS_LeftPanelTab {
        /** Commonly used libraries */
        BASIC_LIBRARY = "basicLibrary",
        /** Device standardization */
        DEVICE_STANDARDIZATION = "device-standardization",
        /** Library design */
        LIB_DESIGN = "libDesign",
        /** Engineering Design */
        PROJECT_DESIGN = "projectDesign",
        /** project */
        PROJECT_LIST = "project_list",
    }
    /**
     * Right Panel Tab
     * @see ./pro-api.esys_rightpaneltab.html
     */
    /** Signature: export declare enum ESYS_RightPanelTab */
    enum ESYS_RightPanelTab {
        /** annotation */
        ANNOTATION = "annotation",
        /** Panel 3D Preview: Properties */
        PANEL_3D_PREVIEW_ATTR = "panel3d-attr",
        /** Panel 3D Preview: Layers */
        PANEL_3D_PREVIEW_LAYER = "panel3d-layer",
        /** Panel: Properties */
        PANEL_ATTR = "panel-attr",
        /** Panel: Filter */
        PANEL_FILTER = "panel-filter",
        /** Panel: Layer */
        PANEL_LAYER = "panel-layer",
        /** PCB 2D Preview: Properties */
        PCB_2D_PREVIEW_ATTR = "pcb2d-attr",
        /** PCB 3D Preview: Properties */
        PCB_3D_PREVIEW_ATTR = "pcb3d-attr",
        /** PCB 3D Preview: Layers */
        PCB_3D_PREVIEW_LAYER = "pcb3d-layer",
        /** PCB: Properties */
        PCB_ATTR = "pcb-attr",
        /** PCB: Filter */
        PCB_FILTER = "pcb-filter",
        /** PCB: Layer */
        PCB_LAYER = "pcb-layer",
        /** PCB: Measure object properties */
        PCB_SKETCHER_ATTR = "pcb-sketcher-attr",
        /** Project: Properties */
        PROJECT_ATTR = "project-attr",
        /** Schematic: Properties */
        SCH_ATTR = "sch-attr",
        /** Schematic: Filter */
        SCH_FILTER = "sch-filter",
    }
    /**
     * Shortcut Key Effective Editor Document Type
     * @see ./pro-api.esys_shortcutkeyeffectiveeditordocumenttype.html
     */
    /** Signature: export declare enum ESYS_ShortcutKeyEffectiveEditorDocumentType */
    enum ESYS_ShortcutKeyEffectiveEditorDocumentType {
        /** Blank page */
        BLANK = 0,
        /** Package */
        FOOTPRINT = 5,
        /** Start Page */
        HOME = 1,
        /** panel */
        PANEL = 6,
        /** Panel 3D Preview */
        PANEL_3D_PREVIEW = 9,
        /** Panel library */
        PANEL_LIBRARY = 10,
        /** PCB */
        PCB = 4,
        /** PCB 2D Preview */
        PCB_2D_PREVIEW = 8,
        /** PCB 3D Preview */
        PCB_3D_PREVIEW = 7,
        /** Schematic diagram page */
        SCHEMATIC_PAGE = 2,
        /** symbol */
        SYMBOL = 3,
    }
    /**
     * Shortcut Key Effective Editor Scene
     * @see ./pro-api.esys_shortcutkeyeffectiveeditorscene.html
     */
    /** Signature: export declare enum ESYS_ShortcutKeyEffectiveEditorScene */
    enum ESYS_ShortcutKeyEffectiveEditorScene {
        /** Canvas drawing */
        DRAW = 4,
        /** Non-canvas */
        EDITOR = 1,
        /** Local shortcut keys */
        LOCAL = 6,
        /** Canvas not selected */
        NOT_SELECT_CANVAS = 3,
        /** Canvas placement */
        PLACE = 5,
        /** Canvas selected */
        SELECT_CANVAS = 2,
    }
    /**
     * Unit
     * @see ./pro-api.esys_unit.html
     */
    /** Signature: export declare enum ESYS_Unit */
    enum ESYS_Unit {
        /** centimeter */
        CENTIMETER = "cm",
        /** Decimeter */
        DECIMETER = "dm",
        /** foot */
        IN = "in",
        /** inch */
        INCH = "inch",
        /** rice */
        METER = "m",
        /** Mill */
        MIL = "mil",
        /** mm */
        MILLIMETER = "mm",
    }
    /**
     * Window Event Type
     * @see ./pro-api.esys_windoweventtype.html
     */
    /** Signature: export declare enum ESYS_WindowEventType */
    enum ESYS_WindowEventType {
        /** Losing focus */
        BLUR = "blur",
        /** Get focus */
        FOCUS = "focus",
    }
    /**
     * Window Open Target
     * @see ./pro-api.esys_windowopentarget.html
     */
    /** Signature: export declare enum ESYS_WindowOpenTarget */
    enum ESYS_WindowOpenTarget {
        /** New Tab Page */
        BLANK = "_blank",
        /** Current page */
        SELF = "_self",
    }
}
declare namespace Document Tree {
    /**
     * Document Tree / Editor Control Class
     * @see ./pro-api.dmt_editorcontrol.html
     */
    /** Remark: Here the editor controls the drawing pages under the currently opened engineering design, and any other documentUuid will be considered non-existent. */
    /** Signature: export declare class DMT_EditorControl */
    class DMT_EditorControl {
        /**
         * Activate the document
         * @see pro-api.dmt_editorcontrol.activatedocument.html
         */
    /**
     * Is the operation successful?
     * Switch to the tab page of the specified document and put the input focus there
     */
        activateDocument(        /** Tag Page ID */
        tabId: string): Promise<boolean>;
        /**
         * Activate split screen
         * @see pro-api.dmt_editorcontrol.activatesplitscreen.html
         */
    /**
     * Is the operation successful?
     * Make the input focus
     */
        activateSplitScreen(        /** Split Screen ID */
        splitScreenId: string): Promise<boolean>;
        /**
         * Close the document
         * @see pro-api.dmt_editorcontrol.closedocument.html
         */
    /**
     * Is the operation successful?
     * If the document has not been saved yet, performing this operation will directly lose all unsaved data. Please first execute SCH_Document.save(), PCB_Document.save(), and PNL_Document.save() to save the data after the modification operation is completed.
     */
        closeDocument(        /**
         * Tag page ID, here supports IDMT_SchematicPageItem.uuid, IDMT_PcbItem.uuid, IDMT_PanelItem.uuid as input
         * @see pro-api.idmt_schematicpageitem.uuid.html
         */
        tabId: string): Promise<boolean>;
        /**
         * Create split screen
         * @see pro-api.dmt_editorcontrol.createsplitscreen.html
         */
    /**
     * Split Screen ID, sourceSplitScreenId represents source split screen, newSplitScreenId represents new split screen
     * Please confirm that there are more than two tab pages on the split screen corresponding to tabId, otherwise the split screen will not be executed and return undefined
     */
        createSplitScreen(        /**
         * Split screen type, horizontal horizontal, vertical vertical
         * @see pro-api.edmt_editorsplitscreendirection.html
         */
        splitScreenType: EDMT_EditorSplitScreenDirection,         /** Tag page ID, the tag page will be moved into a new split screen */
        tabId: string): Promise<{ sourceSplitScreenId: string; newSplitScreenId: string; } | undefined>;
        /**
         * (BETA) Generate indicator marks
         * @see pro-api.dmt_editorcontrol.generateindicatormarkers.html
         */
    /**
     * Indicates whether the tag generation is successful, false means that the operation is not supported by the canvas or the tabId does not exist
     * In the indicator shape data, the unit span of the coordinates of the schematic and symbol canvas is 0.01inch, and the unit span of the coordinates of the PCB and package canvas is mil
     */
        generateIndicatorMarkers(        /**
         * Indicator tag shape object array
         * @see pro-api.idmt_indicatormarkershape.html
         */
        markers: Array<IDMT_IndicatorMarkerShape>,         /** (Optional) Indicates the color of the mark */
        color: { r: number; g: number; b: number; alpha: number; },         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to locate and scale */
        zoom: boolean,         /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<boolean>;
        /**
         * (BETA) Get the image of the rendered area of â€‹â€‹the canvas
         * @see pro-api.dmt_editorcontrol.getcurrentrenderedareaimage.html
         */
        getCurrentRenderedAreaImage(        /** (Optional) Tab ID, if not passed in, get the canvas where the focus was last entered */
        tabId: string): Promise<Blob | undefined>;
        /**
         * Use Tab ID to get split screen ID
         * @see pro-api.dmt_editorcontrol.getsplitscreenidbytabid.html
         */
    /** Split Screen ID */
        getSplitScreenIdByTabId(        /** Tag Page ID */
        tabId: string): Promise<string | undefined>;
        /**
         * Get the editor split screen attribute tree
         * @see pro-api.dmt_editorcontrol.getsplitscreentree.html
         */
    /** The editor split screen attribute tree. If undefined, data acquisition fails */
        getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;
        /**
         * Get all tabs under the specified split screen ID
         * @see pro-api.dmt_editorcontrol.gettabsbysplitscreenid.html
         */
    /**
     * Tags list
     * If the specified split-screen does not exist directly (i.e. children still exist under it), an empty array is returned
     */
        getTabsBySplitScreenId(        /** Split Screen ID */
        splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;
        /**
         * Merge all split screens
         * @see pro-api.dmt_editorcontrol.mergealldocumentfromsplitscreen.html
         */
    /**
     * Is the operation successful?
     * Only available when sub-split screens exist, all sub-split screens will be cancelled and all document tabs will be merged into the initial split screen.
     */
        mergeAllDocumentFromSplitScreen(): Promise<boolean>;
        /**
         * Move the document to the specified split screen
         * @see pro-api.dmt_editorcontrol.movedocumenttosplitscreen.html
         */
    /**
     * Is the operation successful?
     * After moving the document, the editor's split-screen attribute tree may change
     */
        moveDocumentToSplitScreen(        /** Tag Page ID */
        tabId: string,         /**
         * Split Screen ID
         * @see pro-api.idmt_editorsplitscreenitem.id.html
         */
        splitScreenId: string): Promise<boolean>;
        /**
         * Open the document
         * @see pro-api.dmt_editorcontrol.opendocument.html
         */
    /** Tag page ID, if undefined, the document is opened fails */
        openDocument(        /**
         * Document UUID, here supports IDMT_SchematicItem.uuid, IDMT_SchematicPageItem.uuid, IDMT_PcbItem.uuid, IDMT_PanelItem.uuid as inputs
         * @see pro-api.idmt_schematicitem.uuid.html
         */
        documentUuid: string,         /**
         * (Optional) Split Screen ID, that is, IDMT_EditorSplitScreenItem.id obtained by the DMT_EditorControl.getSplitScreenTree() method
         * @see pro-api.dmt_editorcontrol.getsplitscreentree.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Open library symbols and encapsulate documents
         * @see pro-api.dmt_editorcontrol.openlibrarydocument.html
         */
    /** Tag page ID, if undefined, the document is opened fails */
        openLibraryDocument(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * Library types, support symbols and encapsulation
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT,         /** Symbols, encapsulation UUID */
        uuid: string,         /**
         * (Optional) Split Screen ID, that is, IDMT_EditorSplitScreenItem.id obtained by the DMT_EditorControl.getSplitScreenTree() method
         * @see pro-api.dmt_editorcontrol.getsplitscreentree.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Remove indicator mark
         * @see pro-api.dmt_editorcontrol.removeindicatormarkers.html
         */
    /**
     * Indicates whether the tag removal is successful, false means that the operation is not supported by the canvas or the tabId does not exist
     * This interface removes all generated indicators
     */
        removeIndicatorMarkers(        /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<boolean>;
        /**
         * Tile all documents
         * @see pro-api.dmt_editorcontrol.tilealldocumenttosplitscreen.html
         */
    /**
     * Is the operation successful?
     * Split screens will be automatically created for all open document tabs only if sub-split screens are not available
     */
        tileAllDocumentToSplitScreen(): Promise<boolean>;
        /**
         * (BETA) Scale to coordinates
         * @see pro-api.dmt_editorcontrol.zoomto.html
         */
    /**
     * Scaling to the area data, false means that the canvas does not support the scaling operation or tabId does not exist
     * In the schematic diagram, the unit span of the symbol canvas coordinates is 0.01inch, and in the PCB, the unit span of the packaging canvas coordinates is mil
     */
        zoomTo(        /** (Optional) Center coordinate X, if not passed in, the current X coordinate will not be changed */
        x: number,         /** (Optional) Center coordinate Y. If not passed in, the current Y coordinate will not be changed. */
        y: number,         /** (Optional) Scaling ratio, if not passed in, the current scaling ratio will not be changed. The unit span is 1/100. If 200 is passed in, it means the scaling ratio is 200% */
        scaleRatio: number,         /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<{ left: number; right: number; top: number; bottom: number; } | false>;
        /**
         * (BETA) Scale to all elements (apply to all)
         * @see pro-api.dmt_editorcontrol.zoomtoallprimitives.html
         */
    /**
     * Scaling to the area data, false means that the canvas does not support the scaling operation or tabId does not exist
     * In the return data, the coordinate unit span of the schematic and symbol canvas is 0.01inch, and the coordinate unit span of the PCB and package canvas is mil
     */
        zoomToAllPrimitives(        /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<{ left: number; right: number; top: number; bottom: number; } | false>;
        /**
         * (BETA) Scale to area
         * @see pro-api.dmt_editorcontrol.zoomtoregion.html
         */
    /**
     * Is the operation successful?
     * In the schematic diagram, the unit span of the symbol canvas coordinates is 0.01inch, and in the PCB, the unit span of the packaging canvas coordinates is mil
     */
        zoomToRegion(        /** Rectangle frame first X coordinate */
        left: number,         /** Rectangle frame second X coordinate */
        right: number,         /** First Y coordinate of rectangular frame */
        top: number,         /** Rectangle frame second Y coordinate */
        bottom: number,         /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<boolean>;
        /**
         * (BETA) Zoom to selected primitives (Adapted to selected)
         * @see pro-api.dmt_editorcontrol.zoomtoselectedprimitives.html
         */
    /**
     * Scaling to the area data, false means that the canvas does not support the scaling operation or tabId does not exist
     * In the return data, the coordinate unit span of the schematic and symbol canvas is 0.01inch, and the coordinate unit span of the PCB and package canvas is mil
     */
        zoomToSelectedPrimitives(        /** (Optional) Tab ID, if not passed in, is the canvas where the focus was entered last */
        tabId: string): Promise<{ left: number; right: number; top: number; bottom: number; } | false>;
    }
    /**
     * Document Tree / Selection Control Class
     * @see ./pro-api.dmt_selectcontrol.html
     */
    /** Remark: Search and control the focus selection in the document tree */
    /** Signature: export declare class DMT_SelectControl */
    class DMT_SelectControl {
        /**
         * (BETA) Get the properties of the current document
         * @see pro-api.dmt_selectcontrol.getcurrentdocumentinfo.html
         */
    /**
     * Objects composed of document type, UUID, and UUID of the project to which it belongs. If undefined, it will fail to obtain.
     * Only effective after an open project exists, the document type, UUID, and UUID of the project that is currently open and has the last input focus will be obtained.
     */
        getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;
    }
    /**
     * Document Tree / Workspace Class
     * @see ./pro-api.dmt_workspace.html
     */
    /** Signature: export declare class DMT_Workspace */
    class DMT_Workspace {
        /**
         * Get detailed properties for all workspaces
         * @see pro-api.dmt_workspace.getallworkspacesinfo.html
         */
    /** Detailed properties for all workspaces */
        getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;
        /**
         * Get detailed properties of the current workspace
         * @see pro-api.dmt_workspace.getcurrentworkspaceinfo.html
         */
    /**
     * Detailed properties of the workspace, if undefined, the acquisition fails
     * The detailed properties of the current workspace will be obtained
     */
        getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;
        /**
         * Switch to workspace
         * @see pro-api.dmt_workspace.toggletoworkspace.html
         */
    /** Is the switch successful? */
        toggleToWorkspace(        /** (Optional) Workspace UUID, if not specified, switch to personal workspace */
        workspaceUuid: string): Promise<boolean>;
    }
    /**
     * Document Tree / Team Class
     * @see ./pro-api.dmt_team.html
     */
    /** Signature: export declare class DMT_Team */
    class DMT_Team {
        /**
         * Get detailed attributes for all participating teams
         * @see pro-api.dmt_team.getallinvolvedteaminfo.html
         */
    /** Detailed attributes of all participating teams */
        getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;
        /**
         * Get detailed attributes for all direct teams
         * @see pro-api.dmt_team.getallteamsinfo.html
         */
    /**
     * Detailed attributes for all teams
     * Individuals are essentially also a team called **Personals*
     */
        getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;
        /**
         * Get detailed attributes of the current team
         * @see pro-api.dmt_team.getcurrentteaminfo.html
         */
    /**
     * The detailed attributes of the team, if undefined, the acquisition fails
     * The detailed properties of the team that is currently open and has the last input focus will be obtained.
     */
        getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;
    }
    /**
     * Document Tree / Folder Class
     * @see ./pro-api.dmt_folder.html
     */
    /** Signature: export declare class DMT_Folder */
    class DMT_Folder {
        /**
         * (BETA) Create a folder
         * @see pro-api.dmt_folder.createfolder.html
         */
    /** Folder UUID, if undefined, creation fails */
        createFolder(        /** Folder name */
        folderName: string,         /** Team UUID */
        teamUuid: string,         /** (Optional) Parent folder UUID, if not specified, is the root folder */
        parentFolderUuid: string,         /** (Optional) folder description */
        description: string): Promise<string | undefined>;
        /**
         * Delete folder
         * @see pro-api.dmt_folder.deletefolder.html
         */
    /** Is the operation successful? */
        deleteFolder(        /** Team UUID */
        teamUuid: string,         /** Folder UUID */
        folderUuid: string): Promise<boolean>;
        /**
         * Get the UUID of all folders
         * @see pro-api.dmt_folder.getallfoldersuuid.html
         */
    /**
     * Folder UUID Array
     * This interface ignores hierarchical information and will return the UUIDs of folders of all hierarchies and place them in a one-dimensional array.
     */
        getAllFoldersUuid(        /** Team UUID */
        teamUuid: string): Promise<Array<string>>;
        /**
         * Get folder detailed properties
         * @see pro-api.dmt_folder.getfolderinfo.html
         */
    /**
     * Folder attribute, if undefined, it fails to obtain
     * When parentFolderUuid is equal to teamUuid, it represents that the current folder is a first-level folder under the specified team
     */
        getFolderInfo(        /** Team UUID */
        teamUuid: string,         /** Folder UUID */
        folderUuid: string): Promise<IDMT_FolderItem | undefined>;
        /**
         * (BETA) Modify folder description
         * @see pro-api.dmt_folder.modifyfolderdescription.html
         */
    /**
     * Whether the modification is successful
     * Modifying the folder description requires interaction with the workspace system. There is a delay in the modification operation and it takes a short wait before the effect will be presented.
     */
        modifyFolderDescription(        /** Team UUID */
        teamUuid: string,         /** Folder UUID */
        folderUuid: string,         /** (Optional) folder description, if undefined, clear the existing project description */
        description: string): Promise<boolean>;
        /**
         * Modify folder name
         * @see pro-api.dmt_folder.modifyfoldername.html
         */
    /** Whether the modification is successful */
        modifyFolderName(        /** Team UUID */
        teamUuid: string,         /** Folder UUID */
        folderUuid: string,         /** Folder name */
        folderName: string): Promise<boolean>;
        /**
         * Move folders
         * @see pro-api.dmt_folder.movefoldertofolder.html
         */
    /** Whether the move is successful */
        moveFolderToFolder(        /** Team UUID */
        teamUuid: string,         /** Folder UUID */
        folderUuid: string,         /** (Optional) Parent folder UUID, if not specified, defaults to the root folder */
        parentFolderUuid: string): Promise<boolean>;
    }
    /**
     * Document Tree / Project Management Class
     * @see ./pro-api.dmt_project.html
     */
    /** Signature: export declare class DMT_Project */
    class DMT_Project {
        /**
         * (BETA) Create a project
         * @see pro-api.dmt_project.createproject.html
         */
    /** Project UUID, if undefined, creation fails */
        createProject(        /** Project friendly name */
        projectFriendlyName: string,         /** (Optional) Project name, not repeated, only supports letters a-zA-Z, numbers 0-9, and mid-score -. If not specified, it will be automatically generated based on the project-friendly name. */
        projectName: string,         /** (Optional) Team UUID, if not specified, defaults to individual; Team UUID must be specified in the environment where there is no personal project. */
        teamUuid: string,         /** (Optional) folder UUID, if not specified, is the root folder */
        folderUuid: string,         /** (Optional) Project Description */
        description: string,         /**
         * (Optional) Project Collaboration Mode. If team permissions do not require project settings, this parameter will be ignored.
         * @see pro-api.edmt_projectcollaborationmode.html
         */
        collaborationMode: EDMT_ProjectCollaborationMode): Promise<string | undefined>;
        /**
         * Get the UUIDs of all projects
         * @see pro-api.dmt_project.getallprojectsuuid.html
         */
    /**
     * Project UUID array
     * If you specify teamUuid, you will get all projects under the specified team;
     * If folderUuid is specified, all projects under the specified folder are obtained;
     * teamUuid and folderUuid require and only allow one of them to be specified. If both are specified, only folderUuid will be taken;
     * If you specify workspaceUuid, you will get all projects under the specified team/folder under the specified Workspace
     */
        getAllProjectsUuid(        /** (Optional) Team UUID */
        teamUuid: string,         /** (Optional) folder UUID, if not specified, defaults to the team's root folder */
        folderUuid: string,         /** (Optional) Workspace UUID */
        workspaceUuid: string): Promise<Array<string>>;
        /**
         * Get detailed properties of the current project
         * @see pro-api.dmt_project.getcurrentprojectinfo.html
         */
    /**
     * Project properties, if undefined, the acquisition fails
     * The detailed properties of the project associated with the schematic, PCB, and panel that are currently open and have the last input focus will be obtained.
     */
        getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;
        /**
         * Get project properties
         * @see pro-api.dmt_project.getprojectinfo.html
         */
    /**
     * Simple engineering properties, if undefined, the acquisition fails
     * This interface can only read simple engineering properties. If you need a detailed project tree, please use the getCurrentProjectInfo interface
     */
        getProjectInfo(        /** Project UUID */
        projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;
        /**
         * Move project to folder
         * @see pro-api.dmt_project.moveprojecttofolder.html
         */
    /** Whether the move is successful */
        moveProjectToFolder(        /** Project UUID */
        projectUuid: string,         /** (Optional) folder UUID can only be a folder under the team or individual where the current project is located. If undefined, it will be moved to the root folder of the current team. */
        folderUuid: string): Promise<boolean>;
        /**
         * Open the project
         * @see pro-api.dmt_project.openproject.html
         */
    /**
     * Whether the project is successfully opened
     * This operation will open the specified project on the EDA front end. If other projects have been opened and there are unsaved changes, performing this operation will directly lose all unsaved data.
     */
        openProject(        /** Project UUID */
        projectUuid: string): Promise<boolean>;
    }
    /**
     * Document Tree / Board Management Class
     * @see ./pro-api.dmt_board.html
     */
    /** Remark: Perform board management related operations in the currently opened project */
    /** Signature: export declare class DMT_Board */
    class DMT_Board {
        /**
         * Copy the board
         * @see pro-api.dmt_board.copyboard.html
         */
    /** New board name, if undefined, copying fails */
        copyBoard(        /** Source board name */
        sourceBoardName: string): Promise<string | undefined>;
        /**
         * (BETA) Create a Board
         * @see pro-api.dmt_board.createboard.html
         */
    /** Board name, if undefined, creation fails */
        createBoard(        /** (Optional) Association schematic UUID */
        schematicUuid: string,         /** (Optional) Associate PCB UUID */
        pcbUuid: string): Promise<string | undefined>;
        /**
         * Delete the board
         * @see pro-api.dmt_board.deleteboard.html
         */
    /**
     * Is the operation successful?
     * If the specified board does not exist, the interface will return the result of false, indicating that the operation has failed
     */
        deleteBoard(        /** Board name */
        boardName: string): Promise<boolean>;
        /**
         * Get detailed properties of all boards in the project
         * @see pro-api.dmt_board.getallboardsinfo.html
         */
    /** Array of detailed properties of all boards */
        getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;
        /**
         * Get detailed properties of the board
         * @see pro-api.dmt_board.getboardinfo.html
         */
    /** The detailed properties of the board, if undefined, the acquisition fails */
        getBoardInfo(        /** Board name */
        boardName: string): Promise<IDMT_BoardItem | undefined>;
        /**
         * Get detailed properties of the current board
         * @see pro-api.dmt_board.getcurrentboardinfo.html
         */
    /**
     * The detailed properties of the board, if undefined, the acquisition fails
     * It will obtain the schematic diagram currently open and has the last input focus, the detailed properties of the board associated with the PCB
     */
        getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;
        /**
         * Modify the board name
         * @see pro-api.dmt_board.modifyboardname.html
         */
    /** Whether the modification is successful */
        modifyBoardName(        /** Original board name */
        originalBoardName: string,         /** New board name */
        boardName: string): Promise<boolean>;
    }
    /**
     * Document Tree / Schematic Management Class
     * @see ./pro-api.dmt_schematic.html
     */
    /** Remark: Operations related to schematic management in the currently opened project */
    /** Signature: export declare class DMT_Schematic */
    class DMT_Schematic {
        /**
         * (BETA) Copying schematic
         * @see pro-api.dmt_schematic.copyschematic.html
         */
    /**
     * New schematic UUID, if undefined, copying fails
     * If the schematic diagram is associated with a multiplexed module (the multiplexed module symbol with the same name exists in the engineering library), the new multiplexed module symbol will be created synchronously when copying the schematic diagram.
     */
        copySchematic(        /** Source schematic UUID */
        schematicUuid: string,         /** (Optional) The name of the board to which the new schematic belongs. If not specified, it is a free schematic */
        boardName: string): Promise<string | undefined>;
        /**
         * (BETA) Copy the schematic page
         * @see pro-api.dmt_schematic.copyschematicpage.html
         */
    /** New schematic diagram page UUID, if undefined, copying fails */
        copySchematicPage(        /** Source schematic diagram page UUID */
        schematicPageUuid: string,         /** (Optional) Target schematic UUID, if not specified, it is the current schematic */
        schematicUuid: string): Promise<string | undefined>;
        /**
         * (BETA) Creation Schematic
         * @see pro-api.dmt_schematic.createschematic.html
         */
    /** Schematic UUID, if undefined, creation fails */
        createSchematic(        /** (Optional) The name of the board belonging to, if not specified, it is a free schematic diagram */
        boardName: string): Promise<string | undefined>;
        /**
         * (BETA) Create a schematic page
         * @see pro-api.dmt_schematic.createschematicpage.html
         */
    /** Schematic diagram page UUID, if undefined, creation fails */
        createSchematicPage(        /** Schematic diagram UUID */
        schematicUuid: string): Promise<string | undefined>;
        /**
         * (BETA) Delete Schematic
         * @see pro-api.dmt_schematic.deleteschematic.html
         */
    /**
     * Is the operation successful?
     * If the schematic diagram is associated with a multiplexed module (the multiplexed module symbols with the same name exist in the engineering library), the associated PCB and multiplexed module symbols will be deleted simultaneously when deleting the schematic diagram. If the multiplexed module symbols cannot be deleted, they will be skipped.
     */
        deleteSchematic(        /** Schematic UUID */
        schematicUuid: string): Promise<boolean>;
        /**
         * (BETA) Delete the schematic page
         * @see pro-api.dmt_schematic.deleteschematicpage.html
         */
    /** Is the operation successful? */
        deleteSchematicPage(        /** Schematic diagram page UUID */
        schematicPageUuid: string): Promise<boolean>;
        /**
         * (BETA) Get detailed properties of all schematic pages in the project
         * @see pro-api.dmt_schematic.getallschematicpagesinfo.html
         */
    /** Array of detailed properties of all schematic pages */
        getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
        /**
         * (BETA) Get detailed properties of all schematic diagrams in the project
         * @see pro-api.dmt_schematic.getallschematicsinfo.html
         */
    /** Array of detailed properties of all schematic diagrams */
        getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;
        /**
         * (BETA) Get detailed properties of all schematic pages in the current schematic
         * @see pro-api.dmt_schematic.getcurrentschematicallschematicpagesinfo.html
         */
    /** Array of detailed properties of all schematic pages */
        getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
        /**
         * (BETA) Get detailed properties of the current schematic
         * @see pro-api.dmt_schematic.getcurrentschematicinfo.html
         */
    /**
     * Detailed properties of the schematic diagram, if undefined, the acquisition fails
     * The detailed properties of the schematic associated with the schematic page that is currently open and has the last input focus will be obtained.
     */
        getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;
        /**
         * (BETA) Get detailed properties of the current schematic page
         * @see pro-api.dmt_schematic.getcurrentschematicpageinfo.html
         */
    /**
     * Detailed properties of the schematic diagram page, if undefined, the acquisition fails
     * The detailed properties of the schematic page currently open and has the last input focus will be obtained.
     */
        getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;
        /**
         * (BETA) Get detailed properties of the schematic
         * @see pro-api.dmt_schematic.getschematicinfo.html
         */
    /** Detailed properties of the schematic diagram, if undefined, the acquisition fails */
        getSchematicInfo(        /** Schematic UUID */
        schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;
        /**
         * (BETA) Get detailed properties of schematic pages
         * @see pro-api.dmt_schematic.getschematicpageinfo.html
         */
    /** Detailed properties of the schematic diagram page, if undefined, the acquisition fails */
        getSchematicPageInfo(        /** Schematic diagram page UUID */
        schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;
        /**
         * (BETA) Modify the schematic name
         * @see pro-api.dmt_schematic.modifyschematicname.html
         */
    /**
     * Whether the modification is successful
     * If the schematic diagram is associated with a multiplexed module (the multiplexed module symbol with the same name exists in the engineering library), the multiplexed module symbol name and associated PCB name will be modified simultaneously when modifying the name.
     */
        modifySchematicName(        /** Schematic UUID */
        schematicUuid: string,         /** Schematic name */
        schematicName: string): Promise<boolean>;
        /**
         * (BETA) Modify the schematic page name
         * @see pro-api.dmt_schematic.modifyschematicpagename.html
         */
    /** Whether the modification is successful */
        modifySchematicPageName(        /** Schematic diagram page UUID */
        schematicPageUuid: string,         /** Schematic diagram page name */
        schematicPageName: string): Promise<boolean>;
        /**
         * (BETA) Modify the schematic page details list
         * @see pro-api.dmt_schematic.modifyschematicpagetitleblock.html
         */
    /**
     * Whether the modification operation is successful, if the showTitleBlock and titleBlockData are not passed in, it will return false; please note that if there is an unrecognized detail item but the program does not make any errors, it will return a result of true, because the unrecognized detail item is ignored.
     * titleBlockData only needs to pass in any detailed items that need to be modified as key, and pass in the value that needs to be modified. Any unrecognized detailed items will be ignored, and any unintroduced items and values â€‹â€‹will remain in the default state
     */
        modifySchematicPageTitleBlock(        /** (Optional) Whether to display a detailed list, undefined will maintain the current state */
        showTitleBlock: boolean,         /** (Optional) Details that need to be modified and their modified values */
        titleBlockData: { [key: string]: { showTitle?: boolean; showValue?: boolean; value?: any; }; }): Promise<boolean>;
        /**
         * (BETA) Reorder the schematic page
         * @see pro-api.dmt_schematic.reorderschematicpages.html
         */
    /**
     * Is the sorting operation successful?
     * Here, the array of the source schematic page attributes needs to be obtained through DMT_Schematic.getAllSchematicPagesInfo() or other upstream methods, and after completing the array sorting, it is passed in.
     */
        reorderSchematicPages(        /** The schematic diagram associated with the graph page that performs sorting UUID */
        schematicUuid: string,         /**
         * Array of all schematic page properties
         * @see pro-api.idmt_schematicpageitem.html
         */
        schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;
    }
    /**
     * Document Tree / PCB Management Class
     * @see ./pro-api.dmt_pcb.html
     */
    /** Remark: Perform PCB management operations in the currently opened project */
    /** Signature: export declare class DMT_Pcb */
    class DMT_Pcb {
        /**
         * Copy PCB
         * @see pro-api.dmt_pcb.copypcb.html
         */
    /**
     * New PCB UUID, if undefined, copying fails
     * Even if the PCB has associated the multiplexed module (the multiplexed module symbol with the same name exists in the project library), the multiplexed module symbol is not created. This operation logic is consistent with the current editor front-end.
     */
        copyPcb(        /** Source PCB UUID */
        pcbUuid: string,         /** (Optional) The name of the board to which the new PCB belongs, if not specified, it is a free PCB */
        boardName: string): Promise<string | undefined>;
        /**
         * Create a PCB
         * @see pro-api.dmt_pcb.createpcb.html
         */
    /** PCB UUID, if undefined, creation fails */
        createPcb(        /** (Optional) The name of the board belonging to, if not specified, it is a free PCB */
        boardName: string): Promise<string | undefined>;
        /**
         * Delete PCB
         * @see pro-api.dmt_pcb.deletepcb.html
         */
    /**
     * Is the operation successful?
     * If the PCB has associated multiplexed modules (the multiplexed module symbols with the same name exist in the project library), the associated schematic and multiplexed module symbols will be deleted simultaneously when deleting the PCB. If the multiplexed module symbols cannot be deleted, they will be skipped
     */
        deletePcb(        /** PCB UUID */
        pcbUuid: string): Promise<boolean>;
        /**
         * Get detailed properties of all PCBs in the project
         * @see pro-api.dmt_pcb.getallpcbsinfo.html
         */
    /** Array of detailed properties for all PCBs */
        getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;
        /**
         * Get detailed properties of the current PCB
         * @see pro-api.dmt_pcb.getcurrentpcbinfo.html
         */
    /**
     * The detailed properties of the PCB, if undefined, the acquisition fails
     * The detailed properties of the currently open PCB with the last input focus will be obtained
     */
        getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;
        /**
         * Get detailed properties of PCB
         * @see pro-api.dmt_pcb.getpcbinfo.html
         */
    /** The detailed properties of the PCB, if undefined, the acquisition fails */
        getPcbInfo(        /** PCB UUID */
        pcbUuid: string): Promise<IDMT_PcbItem | undefined>;
        /**
         * Modify PCB name
         * @see pro-api.dmt_pcb.modifypcbname.html
         */
    /**
     * Whether the modification is successful
     * If the PCB has associated multiplexed modules (the multiplexed module symbols with the same name exist in the engineering library), the multiplexed module symbol name and associated schematic name will be modified simultaneously when modifying the name.
     */
        modifyPcbName(        /** PCB UUID */
        pcbUuid: string,         /** PCB Name */
        pcbName: string): Promise<boolean>;
    }
    /**
     * Document Tree / Panel Management Class
     * @see ./pro-api.dmt_panel.html
     */
    /** Remark: Operations related to panel management in the currently opened project */
    /** Signature: export declare class DMT_Panel */
    class DMT_Panel {
        /**
         * Copy Panel
         * @see pro-api.dmt_panel.copypanel.html
         */
    /** New panel UUID, if undefined, copying fails */
        copyPanel(        /** Source panel UUID */
        panelUuid: string): Promise<string | undefined>;
        /**
         * (BETA) Create a panel
         * @see pro-api.dmt_panel.createpanel.html
         */
    /** Panel UUID, if undefined, creation fails */
        createPanel(): Promise<string | undefined>;
        /**
         * Delete the panel
         * @see pro-api.dmt_panel.deletepanel.html
         */
    /** Is the operation successful? */
        deletePanel(        /** Panel UUID */
        panelUuid: string): Promise<boolean>;
        /**
         * Get detailed properties of all panels in the project
         * @see pro-api.dmt_panel.getallpanelsinfo.html
         */
    /** Array of detailed properties for all panels */
        getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;
        /**
         * Get detailed properties of the current panel
         * @see pro-api.dmt_panel.getcurrentpanelinfo.html
         */
    /**
     * The detailed properties of the panel, if undefined, the acquisition fails
     * The detailed properties of the panel currently open and with the last input focus will be obtained.
     */
        getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;
        /**
         * Get detailed properties of the panel
         * @see pro-api.dmt_panel.getpanelinfo.html
         */
    /** The detailed properties of the panel, if undefined, the acquisition fails */
        getPanelInfo(        /** Panel UUID */
        panelUuid: string): Promise<IDMT_PanelItem | undefined>;
        /**
         * Modify the panel name
         * @see pro-api.dmt_panel.modifypanelname.html
         */
    /** Whether the modification is successful */
        modifyPanelName(        /** Panel UUID */
        panelUuid: string,         /** Panel name */
        panelName: string): Promise<boolean>;
    }
    /**
     * Board Properties
     * @see ./pro-api.idmt_boarditem.html
     */
    /** Signature: export interface IDMT_BoardItem */
    interface IDMT_BoardItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.BOARD;
        /**
         * Board name
         * @see pro-api.idmt_boarditem.name.html
         */
        name: string;
        /**
         * Project UUID
         * @see pro-api.idmt_boarditem.parentprojectuuid.html
         */
        parentProjectUuid: string;
        /**
         * Subordinate PCB
         * @see pro-api.idmt_pcbitem.html
         */
        pcb: IDMT_PcbItem;
        /**
         * Subordinate schematic
         * @see pro-api.idmt_schematicitem.html
         */
        schematic: IDMT_SchematicItem;
    }
    /**
     * Editor Tab Item
     * @see ./pro-api.idmt_editortabitem.html
     */
    /** Signature: export interface IDMT_EditorTabItem */
    interface IDMT_EditorTabItem {
        /**
         * Is the tab page dragable?
         * @see pro-api.idmt_editortabitem.draggable.html
         */
        draggable: boolean;
        /**
         * Is the tab page closed
         * @see pro-api.idmt_editortabitem.isabledelete.html
         */
        isAbleDelete: boolean;
        /**
         * Tag Page ID
         * @see pro-api.idmt_editortabitem.tabid.html
         */
        tabId: string;
        /**
         * Tag page title
         * @see pro-api.idmt_editortabitem.title.html
         */
        title: string;
    }
    /**
     * Editor Split Screen Properties
     * @see ./pro-api.idmt_editorsplitscreenitem.html
     */
    /** Remark: tabs and children do not exist at the same time. When tabs exist, it means that there is no split screen. Children will be undefined */
    /** Signature: export interface IDMT_EditorSplitScreenItem */
    interface IDMT_EditorSplitScreenItem {
        /**
         * (Optional) Sub-split screen
         * @see pro-api.idmt_editorsplitscreenitem.html
         */
        children?: Array<IDMT_EditorSplitScreenItem>;
        /**
         * (Optional) Split Screen Orientation
         * @see pro-api.edmt_editorsplitscreendirection.html
         */
        direction?: EDMT_EditorSplitScreenDirection;
        /**
         * (Optional) Parent Split Screen ID
         * @see pro-api.idmt_editorsplitscreenitem.fatherid.html
         */
        fatherId?: string;
        /**
         * Split Screen ID
         * @see pro-api.idmt_editorsplitscreenitem.id.html
         */
        id: string;
        /**
         * (Optional) Tags in split screen
         * @see pro-api.idmt_editortabitem.html
         */
        tabs?: Array<IDMT_EditorTabItem>;
    }
    /**
     * Folder Properties
     * @see ./pro-api.idmt_folderitem.html
     */
    /** Signature: export interface IDMT_FolderItem */
    interface IDMT_FolderItem {
        /**
         * (Optional) Subfolder UUID List
         * @see pro-api.idmt_folderitem.childrenfoldersuuid.html
         */
        childrenFoldersUuid?: Array<string>;
        /**
         * (Optional) folder description
         * @see pro-api.idmt_folderitem.description.html
         */
        description?: string;
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.FOLDER;
        /**
         * Folder name
         * @see pro-api.idmt_folderitem.name.html
         */
        name: string;
        /**
         * Parent folder UUID
         * @see pro-api.idmt_folderitem.parentfolderuuid.html
         */
        parentFolderUuid: string;
        /**
         * Team UUID
         * @see pro-api.idmt_folderitem.teamuuid.html
         */
        teamUuid: string;
        /**
         * Folder UUID
         * @see pro-api.idmt_folderitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Panel Properties
     * @see ./pro-api.idmt_panelitem.html
     */
    /** Signature: export interface IDMT_PanelItem */
    interface IDMT_PanelItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.PANEL;
        /**
         * Panel name
         * @see pro-api.idmt_panelitem.name.html
         */
        name: string;
        /**
         * Project UUID
         * @see pro-api.idmt_panelitem.parentprojectuuid.html
         */
        parentProjectUuid: string;
        /**
         * Panel UUID
         * @see pro-api.idmt_panelitem.uuid.html
         */
        uuid: string;
    }
    /**
     * PCB Properties
     * @see ./pro-api.idmt_pcbitem.html
     */
    /** Signature: export interface IDMT_PcbItem */
    interface IDMT_PcbItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.PCB | EDMT_ItemType.CBB_PCB;
        /**
         * PCB Name
         * @see pro-api.idmt_pcbitem.name.html
         */
        name: string;
        /**
         * (Optional) Name of the board
         * @see pro-api.idmt_pcbitem.parentboardname.html
         */
        parentBoardName?: string;
        /**
         * Project UUID
         * @see pro-api.idmt_pcbitem.parentprojectuuid.html
         */
        parentProjectUuid: string;
        /**
         * PCB UUID
         * @see pro-api.idmt_pcbitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Project Properties
     * @see ./pro-api.idmt_projectitem.html
     */
    /** Signature: export interface IDMT_ProjectItem extends IDMT_BriefProjectItem */
    interface IDMT_ProjectItem {
        /**
         * (Optional) Engineering Collaboration Mode
         * @see pro-api.edmt_projectcollaborationmode.html
         */
        collaborationMode?: EDMT_ProjectCollaborationMode;
        /**
         * Document data within the project
         * @see pro-api.idmt_boarditem.html
         */
        data: Array<IDMT_BoardItem | IDMT_SchematicItem | IDMT_PcbItem | IDMT_PanelItem>;
        /**
         * (Optional) Description
         * @see pro-api.idmt_projectitem.description.html
         */
        description?: string;
        /**
         * Project link name
         * @see pro-api.idmt_projectitem.name.html
         */
        name: string;
    }
    /**
     * Brief Project Properties
     * @see ./pro-api.idmt_briefprojectitem.html
     */
    /** Signature: export interface IDMT_BriefProjectItem */
    interface IDMT_BriefProjectItem {
        /**
         * (Optional) Folder UUID
         * @see pro-api.idmt_briefprojectitem.folderuuid.html
         */
        folderUuid?: string;
        /**
         * Project friendly name
         * @see pro-api.idmt_briefprojectitem.friendlyname.html
         */
        friendlyName: string;
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.PROJECT | EDMT_ItemType.CBB_PROJECT;
        /**
         * Team UUID
         * @see pro-api.idmt_briefprojectitem.teamuuid.html
         */
        teamUuid: string;
        /**
         * Project UUID
         * @see pro-api.idmt_briefprojectitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Schematic Properties
     * @see ./pro-api.idmt_schematicitem.html
     */
    /** Signature: export interface IDMT_SchematicItem */
    interface IDMT_SchematicItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.SCHEMATIC | EDMT_ItemType.CBB_SCHEMATIC;
        /**
         * Schematic name
         * @see pro-api.idmt_schematicitem.name.html
         */
        name: string;
        /**
         * Subordinate schematic diagram page
         * @see pro-api.idmt_schematicpageitem.html
         */
        page: Array<IDMT_SchematicPageItem>;
        /**
         * (Optional) Board UUID
         * @see pro-api.idmt_schematicitem.parentboarduuid.html
         */
        parentBoardUuid?: string;
        /**
         * Project UUID
         * @see pro-api.idmt_schematicitem.parentprojectuuid.html
         */
        parentProjectUuid: string;
        /**
         * Schematic UUID
         * @see pro-api.idmt_schematicitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Schematic Page Properties
     * @see ./pro-api.idmt_schematicpageitem.html
     */
    /** Signature: export interface IDMT_SchematicPageItem */
    interface IDMT_SchematicPageItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.SCHEMATIC_PAGE;
        /**
         * Schematic diagram page name
         * @see pro-api.idmt_schematicpageitem.name.html
         */
        name: string;
        /**
         * Schematic diagram UUID
         * @see pro-api.idmt_schematicpageitem.parentschematicuuid.html
         */
        parentSchematicUuid: string;
        /**
         * Whether to display a detailed list
         * @see pro-api.idmt_schematicpageitem.showtitleblock.html
         */
        showTitleBlock: boolean;
        /**
         * Detailed table data
         * @see pro-api.idmt_schematicpageitem.titleblockdata.html
         */
        titleBlockData: { [key: string]: { showTitle: boolean; showValue: boolean; value: any; }; };
        /**
         * Schematic diagram page UUID
         * @see pro-api.idmt_schematicpageitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Editor Document Object
     * @see ./pro-api.idmt_editordocumentitem.html
     */
    /** Signature: export interface IDMT_EditorDocumentItem */
    interface IDMT_EditorDocumentItem {
        /**
         * Document Type
         * @see pro-api.edmt_editordocumenttype.html
         */
        documentType: EDMT_EditorDocumentType;
        /**
         * The project to which the document belongs to UUID
         * @see pro-api.idmt_editordocumentitem.parentprojectuuid.html
         */
        parentProjectUuid: string;
        /**
         * Document UUID
         * @see pro-api.idmt_editordocumentitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Team Properties
     * @see ./pro-api.idmt_teamitem.html
     */
    /** Signature: export interface IDMT_TeamItem */
    interface IDMT_TeamItem {
        /**
         * The current user's identity (permission group) ID within the team
         * @see pro-api.idmt_teamitem.identity.html
         */
        identity: number;
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.TEAM;
        /**
         * Team name
         * @see pro-api.idmt_teamitem.name.html
         */
        name: string;
        /**
         * Team UUID
         * @see pro-api.idmt_teamitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Workspace Properties
     * @see ./pro-api.idmt_workspaceitem.html
     */
    /** Signature: export interface IDMT_WorkspaceItem */
    interface IDMT_WorkspaceItem {
        /**
         * Project Type
         * @see pro-api.edmt_itemtype.html
         */
        readonly itemType: EDMT_ItemType.WORKSPACE;
        /**
         * Workspace name
         * @see pro-api.idmt_workspaceitem.name.html
         */
        name: string;
        /**
         * Workspace UUID
         * @see pro-api.idmt_workspaceitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Project Collaboration Mode
     * @see ./pro-api.edmt_projectcollaborationmode.html
     */
    /** Signature: export declare enum EDMT_ProjectCollaborationMode */
    enum EDMT_ProjectCollaborationMode {
        /** free */
        FREE = 1,
        /** strict */
        STRICT = 3,
    }
    /**
     * Document Tree Item Type
     * @see ./pro-api.edmt_itemtype.html
     */
    /** Signature: export declare enum EDMT_ItemType */
    enum EDMT_ItemType {
        /** board */
        BOARD = "Board",
        /** Multiplexing module PCB */
        CBB_PCB = "CBB PCB",
        /** Reuse module engineering */
        CBB_PROJECT = "CBB Project",
        /** Multiplexing module schematic diagram */
        CBB_SCHEMATIC = "CBB Schematic",
        /** Folders */
        FOLDER = "Folder",
        /** panel */
        PANEL = "Panel",
        /** PCB */
        PCB = "PCB",
        /** project */
        PROJECT = "Project",
        /** Schematic diagram */
        SCHEMATIC = "Schematic",
        /** Schematic diagram page */
        SCHEMATIC_PAGE = "Schematic Page",
        /** team */
        TEAM = "Team",
        /** Workspace */
        WORKSPACE = "Workspace",
    }
    /**
     * Editor Document Type
     * @see ./pro-api.edmt_editordocumenttype.html
     */
    /** Signature: export declare enum EDMT_EditorDocumentType */
    enum EDMT_EditorDocumentType {
        /** Blank page */
        BLANK = 0,
        /** Package */
        FOOTPRINT = 4,
        /** Start Page */
        HOME = -1,
        /** panel */
        PANEL = 26,
        /** Panel 3D Preview */
        PANEL_3D_PREVIEW = 27,
        /** Panel library */
        PANEL_LIBRARY = 29,
        /** PCB */
        PCB = 3,
        /** PCB 2D Preview */
        PCB_2D_PREVIEW = 12,
        /** PCB 3D Preview */
        PCB_3D_PREVIEW = 15,
        /** Schematic diagram page */
        SCHEMATIC_PAGE = 1,
        /** Multiplexing module symbols */
        SYMBOL_CBB = 17,
        /** Component symbols */
        SYMBOL_COMPONENT = 2,
        /** Drawing symbols */
        SYMBOL_DRAWING = 20,
        /** Network Identifier */
        SYMBOL_NET_FLAG = 18,
        /** Network port symbol */
        SYMBOL_NET_PORT = 19,
        /** No electrical symbols */
        SYMBOL_NON_ELECTRICAL = 21,
        /** Short-circuit identifier */
        SYMBOL_SHORT_CIRCUIT_FLAG = 22,
    }
    /**
     * Editor Split Screen Direction
     * @see ./pro-api.edmt_editorsplitscreendirection.html
     */
    /** Signature: export declare enum EDMT_EditorSplitScreenDirection */
    enum EDMT_EditorSplitScreenDirection {
        /** level */
        HORIZONTAL = "horizontal",
        /** vertical */
        VERTICAL = "vertical",
    }
}
declare namespace SchematicSymbol {
    /**
     * Schematic & Symbol / Document Operations Class
     * @see ./pro-api.sch_document.html
     */
    /** Remark: Operations on the overall design document */
    /** Signature: export declare class SCH_Document */
    class SCH_Document {
        /**
         * Import changes from PCB
         * @see pro-api.sch_document.importchanges.html
         */
    /** Whether the import operation is successful, the import failed or the free schematic returns false */
        importChanges(): Promise<boolean>;
        /**
         * Save the document
         * @see pro-api.sch_document.save.html
         */
    /** Whether the save operation is successful, and errors such as the failure to save and upload fail will be returned to false. */
        save(): Promise<boolean>;
    }
    /**
     * Schematic & Symbol / Design Rule Check (DRC) Class
     * @see ./pro-api.sch_drc.html
     */
    /** Remark: Check and set DRC rules */
    /** Signature: export declare class SCH_Drc */
    class SCH_Drc {
        /**
         * Check DRC
         * @see pro-api.sch_drc.check.html
         */
    /**
     * DRC checks whether there are no errors
     * If the check result has an error** or above level, the bottom DRC window will always be called out, ignoring the userInterface parameter
     */
        check(        /** (Optional) Whether to strictly check, Warning will return false when strictly checked, otherwise return true */
        strict: boolean,         /** (Optional) Whether to display the UI (bottom DRC window at the call out) */
        userInterface: boolean): Promise<boolean>;
    }
    /**
     * Schematic & Symbol / Event Class
     * @see ./pro-api.sch_event.html
     */
    /** Remark: Register event callback */
    /** Signature: export declare class SCH_Event */
    class SCH_Event {
        /**
         * Added mouse event monitoring
         * @see pro-api.sch_event.addmouseeventlistener.html
         */
        addMouseEventListener(        /** Event ID to prevent duplicate registration of events */
        id: string,         /** Event Type */
        eventType: 'all' | 'selected' | 'clearSelected',         /** Callback function when event triggers */
        callFn: (eventType: 'selected' | 'clearSelected') => void | Promise<void>,         /** (Optional) Whether to listen only once */
        onlyOnce: boolean): void;
        /**
         * Query whether the event listening exists
         * @see pro-api.sch_event.iseventlisteneralreadyexist.html
         */
    /** Whether event listening exists */
        isEventListenerAlreadyExist(        /** Event ID */
        id: string): boolean;
        /**
         * Remove event listening
         * @see pro-api.sch_event.removeeventlistener.html
         */
    /** Whether to remove the specified event listening */
        removeEventListener(        /** Event ID */
        id: string): boolean;
    }
    /**
     * Schematic & Symbol / Netlist Class
     * @see ./pro-api.sch_netlist.html
     */
    /** Remark: Get and update the netlist */
    /** Signature: export declare class SCH_Netlist */
    class SCH_Netlist {
        /**
         * Get the netlist
         * @see pro-api.sch_netlist.getnetlist.html
         */
    /** Netlist data */
        getNetlist(        /**
         * (Optional) Netlist format
         * @see pro-api.esys_netlisttype.html
         */
        type: ESYS_NetlistType): Promise<string>;
        /**
         * (BETA) Update the netlist
         * @see pro-api.sch_netlist.setnetlist.html
         */
        setNetlist(        /**
         * Netlist format
         * @see pro-api.esys_netlisttype.html
         */
        type: ESYS_NetlistType | undefined,         /** Netlist data */
        netlist: string): Promise<void>;
    }
    /**
     * Schematic & Symbol / Manufacturing Data Class
     * @see ./pro-api.sch_manufacturedata.html
     */
    /** Remark: Obtain the production materials documents of the current schematic page and place orders quickly */
    /** Signature: export declare class SCH_ManufactureData */
    class SCH_ManufactureData {
        /**
         * (BETA) Get BOM files
         * @see pro-api.sch_manufacturedata.getbomfile.html
         */
    /**
     * BOM file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getBomFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'xlsx' | 'csv',         /** (Optional) Template name */
        template: string,         /** (Optional) Filtering rules should only include rules that need to be enabled, property is the rule name, and includeValue is the matching value */
        filterOptions: Array<{ property: string; includeValue: boolean | string; }>,         /** (Optional) Statistics, containing the names of all statistics that need to be enabled */
        statistics: Array<string>,         /** (Optional) property, containing the names of all attributes that need to be enabled */
        property: Array<string>,         /**
         * (Optional) column attributes and sorts. If title, sort, group, orderWeight is not passed in, the default value will be taken. null means **None** or **Nine**
         * @see pro-api.ipcb_bompropertiestablecolumns.html
         */
        columns: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;
        /**
         * (BETA) Get Netlist Files (Netlist)
         * @see pro-api.sch_manufacturedata.getnetlistfile.html
         */
    /**
     * Netlist file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getNetlistFile(        /** (Optional) File name */
        fileName: string,         /**
         * (Optional) Netlist Type
         * @see pro-api.esys_netlisttype.html
         */
        netlistType: ESYS_NetlistType): Promise<File | undefined>;
        /**
         * (BETA) Component Order
         * @see pro-api.sch_manufacturedata.placecomponentsorder.html
         */
    /** Passed the order check */
        placeComponentsOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
        /**
         * (BETA) SMT component order
         * @see pro-api.sch_manufacturedata.placesmtcomponentsorder.html
         */
    /** Passed the order check */
        placeSmtComponentsOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
    }
    /**
     * Schematic & Symbol / Primitive Class
     * @see ./pro-api.sch_primitive.html
     */
    /** Remark: Unified operation of elements */
    /** Signature: export declare class SCH_Primitive */
    class SCH_Primitive {
        /**
         * Gets all properties of the primitive of the specified ID
         * @see pro-api.sch_primitive.getprimitivebyprimitiveid.html
         */
    /** All properties of the primitive */
        getPrimitiveByPrimitiveId(        /** Essence ID */
        id: string): Promise<ISCH_Primitive | undefined>;
        /**
         * (BETA) Get the BBox of the primitive
         * @see pro-api.sch_primitive.getprimitivesbbox.html
         */
    /** If the BBox of the element does not exist or does not have a BBox, the undefined result will be returned */
        getPrimitivesBBox(        /**
         * Essence ID array or element object array
         * @see pro-api.isch_primitive.html
         */
        primitiveIds: Array<string | ISCH_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number; } | undefined>;
        /**
         * (BETA) Gets the element type of the element of the specified ID
         * @see pro-api.sch_primitive.getprimitivetypebyprimitiveid.html
         */
    /** Element Type */
        getPrimitiveTypeByPrimitiveId(        /** Essence ID */
        id: string): Promise<ESCH_PrimitiveType | undefined>;
    }
    /**
     * Schematic & Symbol / Arc Primitive Class
     * @see ./pro-api.sch_primitivearc.html
     */
    /** Signature: export declare class SCH_PrimitiveArc implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveArc {
        /**
         * (BETA) Create an arc
         * @see pro-api.sch_primitivearc.create.html
         */
    /** Arc primitive object */
        create(        /** Start point X */
        startX: number,         /** Starting point Y */
        startY: number,         /** Reference point X */
        referenceX: number,         /** Reference point Y */
        referenceY: number,         /** Termination point X */
        endX: number,         /** Termination point Y */
        endY: number,         /** (Optional) color, null means default */
        color: string | null,         /** (Optional) Fill color, none means no fill, null means default */
        fillColor: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;
        /**
         * (BETA) Delete arcs
         * @see pro-api.sch_primitivearc.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The primitive ID of an arc or an arc primitive object
         * @see pro-api.isch_primitivearc.html
         */
        primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;
        /**
         * (BETA) Get Arcs
         * @see pro-api.sch_primitivearc.get.html
         */
    /** Arc primitive object, undefined means acquisition failed */
        get(        /** The primitive ID of the arc can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;
        /**
         * (BETA) Get Arcs
         * @see pro-api.sch_primitivearc.get_1.html
         */
    /**
     * Arc primitive object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the arc can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;
        /**
         * (BETA) Get all arcs
         * @see pro-api.sch_primitivearc.getall.html
         */
    /** Arc primitive object array */
        getAll(): Promise<Array<ISCH_PrimitiveArc>>;
        /**
         * (BETA) Get the primitive ID of all arcs
         * @see pro-api.sch_primitivearc.getallprimitiveid.html
         */
    /** Arc primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify the arc
         * @see pro-api.sch_primitivearc.modify.html
         */
    /** Arc primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivearc.html
         */
        primitiveId: string | ISCH_PrimitiveArc,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { startX?: number; startY?: number; referenceX?: number; referenceY?: number; endX?: number; endY?: number; color?: string | null; fillColor?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; }): Promise<ISCH_PrimitiveArc | undefined>;
    }
    /**
     * Schematic & Symbol / Bus Primitive Class
     * @see ./pro-api.sch_primitivebus.html
     */
    /** Signature: export declare class SCH_PrimitiveBus implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveBus {
        /**
         * (BETA) Create a bus
         * @see pro-api.sch_primitivebus.create.html
         */
    /** Bus primitive object */
        create(        /** Bus name */
        busName: string,         /** Polyline coordinate groups, each segment is a continuous group of lines described in [x1, y1, x2, y2, x3, y3]. If the polylines have no connection to each other, the creation will fail. */
        line: Array<number> | Array<Array<number>>,         /** (Optional) bus color, null means default */
        color: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
        /**
         * (BETA) Delete the bus
         * @see pro-api.sch_primitivebus.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Bus primitive ID or bus primitive object
         * @see pro-api.isch_primitivebus.html
         */
        primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
        /**
         * (BETA) Get the bus
         * @see pro-api.sch_primitivebus.get.html
         */
    /** Bus element object, undefined means acquisition failed */
        get(        /** The primitive ID of the bus can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;
        /**
         * (BETA) Get the bus
         * @see pro-api.sch_primitivebus.get_1.html
         */
    /**
     * Bus primitive object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the bus can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;
        /**
         * (BETA) Get all buses
         * @see pro-api.sch_primitivebus.getall.html
         */
    /** Bus primitive object array */
        getAll(): Promise<Array<ISCH_PrimitiveBus>>;
        /**
         * (BETA) Get the primitive ID of all buses
         * @see pro-api.sch_primitivebus.getallprimitiveid.html
         */
    /** Bus primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify the bus
         * @see pro-api.sch_primitivebus.modify.html
         */
    /** Bus primitive object */
        modify(        /**
         * Bus primitive ID or bus primitive object
         * @see pro-api.isch_primitivebus.html
         */
        primitiveId: string | ISCH_PrimitiveBus,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { busName?: string; line?: Array<number> | Array<Array<number>>; color?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; }): Promise<ISCH_PrimitiveBus | undefined>;
    }
    /**
     * Schematic & Symbol / Circle Primitive Class
     * @see ./pro-api.sch_primitivecircle.html
     */
    /** Signature: export declare class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveCircle {
        /**
         * (BETA) Create a circle
         * @see pro-api.sch_primitivecircle.create.html
         */
    /** Circular Object */
        create(        /** Centre X */
        centerX: number,         /** Centre Y */
        centerY: number,         /** radius */
        radius: number,         /** (Optional) color, null means default */
        color: string | null,         /** (Optional) Fill color, none means no fill, null means default */
        fillColor: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null,         /**
         * (Optional) Fill style, null means default
         * @see pro-api.esch_primitivefillstyle.html
         */
        fillStyle: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle>;
        /**
         * (BETA) Delete the circle
         * @see pro-api.sch_primitivecircle.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Circular primitive ID or circle primitive object
         * @see pro-api.isch_primitivecircle.html
         */
        primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;
        /**
         * (BETA) Get Circles
         * @see pro-api.sch_primitivecircle.get.html
         */
    /** Circular primitive object, undefined means acquisition failed */
        get(        /** The primitive ID of a circle can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;
        /**
         * (BETA) Get Circles
         * @see pro-api.sch_primitivecircle.get_1.html
         */
    /**
     * Circular primitive object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of a circle can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;
        /**
         * (BETA) Get all circles
         * @see pro-api.sch_primitivecircle.getall.html
         */
    /** Circular primitive object array */
        getAll(): Promise<Array<ISCH_PrimitiveCircle>>;
        /**
         * (BETA) Get the primitive ID of all circles
         * @see pro-api.sch_primitivecircle.getallprimitiveid.html
         */
    /** Circular primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify the circle
         * @see pro-api.sch_primitivecircle.modify.html
         */
    /** Circular Object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivecircle.html
         */
        primitiveId: string | ISCH_PrimitiveCircle,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { centerX?: number; centerY?: number; radius?: number; color?: string | null; fillColor?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; fillStyle?: ESCH_PrimitiveFillStyle | null; }): Promise<ISCH_PrimitiveCircle | undefined>;
    }
    /**
     * Schematic & Symbol / Component Primitive Class
     * @see ./pro-api.sch_primitivecomponent.html
     */
    /** Signature: export declare class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveComponent {
        /**
         * (BETA) Create a device
         * @see pro-api.sch_primitivecomponent.create.html
         */
    /** Device element object */
        create(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem,         /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** (Optional) Subtitle name */
        subPartName: string,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror */
        mirror: boolean,         /** (Optional) Whether to join BOM */
        addIntoBom: boolean,         /** (Optional) Whether to go to PCB */
        addIntoPcb: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Create a network identity
         * @see pro-api.sch_primitivecomponent.createnetflag.html
         */
    /** Device element object */
        createNetFlag(        /** Identification Type */
        identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround',         /** Network name */
        net: string,         /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror */
        mirror: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Create a network port
         * @see pro-api.sch_primitivecomponent.createnetport.html
         */
    /** Device element object */
        createNetPort(        /** Port Direction */
        direction: 'IN' | 'OUT' | 'BI',         /** Network name */
        net: string,         /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror */
        mirror: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Create a short-circuit identifier
         * @see pro-api.sch_primitivecomponent.createshortcircuitflag.html
         */
    /** Device element object */
        createShortCircuitFlag(        /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror */
        mirror: boolean): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Remove device
         * @see pro-api.sch_primitivecomponent.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Device primitive ID or device primitive object
         * @see pro-api.isch_primitivecomponent.html
         */
        primitiveIds: string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>): Promise<boolean>;
        /**
         * (BETA) Obtaining Devices
         * @see pro-api.sch_primitivecomponent.get.html
         */
    /** Device element object, undefined means acquisition failure */
        get(        /** The primitive ID of the device can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Obtaining Devices
         * @see pro-api.sch_primitivecomponent.get_1.html
         */
    /**
     * Device element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the device can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent>>;
        /**
         * (BETA) Get all devices
         * @see pro-api.sch_primitivecomponent.getall.html
         */
    /** Device element object array */
        getAll(        /**
         * (Optional) Device Type
         * @see pro-api.esch_primitivecomponenttype.html
         */
        componentType: ESCH_PrimitiveComponentType,         /** (Optional) Whether to obtain all schematic pages of the device */
        allSchematicPages: boolean): Promise<Array<ISCH_PrimitiveComponent>>;
        /**
         * (BETA) Gets all pins associated with the device
         * @see pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.html
         */
    /** Device pin element array */
        getAllPinsByPrimitiveId(        /** Device Entity ID */
        primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;
        /**
         * (BETA) Get the primitive IDs of all devices
         * @see pro-api.sch_primitivecomponent.getallprimitiveid.html
         */
    /** Device primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) Device Type
         * @see pro-api.esch_primitivecomponenttype.html
         */
        componentType: ESCH_PrimitiveComponentType,         /** (Optional) Whether to obtain all schematic pages of the device */
        allSchematicPages: boolean): Promise<Array<string>>;
        /**
         * (BETA) Gets the set of all attribute names for all devices
         * @see pro-api.sch_primitivecomponent.getallpropertynames.html
         */
    /** A collection of all attribute names for all devices */
        getAllPropertyNames(): Promise<string[]>;
        /**
         * (BETA) Modify the device
         * @see pro-api.sch_primitivecomponent.modify.html
         */
    /**
     * Device element object
     * This method is allowed to modify only if the device type is COMPONENT
     */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivecomponent.html
         */
        primitiveId: string | ISCH_PrimitiveComponent, property: { x?: number; y?: number; rotation?: number; mirror?: boolean; addIntoBom?: boolean; addIntoPcb?: boolean; designator?: string | null; name?: string | null; uniqueId?: string | null; manufacturer?: string | null; manufacturerId?: string | null; supplier?: string | null; supplierId?: string | null; otherProperty?: { [key: string]: string | number | boolean; }; }): Promise<ISCH_PrimitiveComponent | undefined>;
        /**
         * (BETA) Place the device using the mouse
         * @see pro-api.sch_primitivecomponent.placecomponentwithmouse.html
         */
    /**
     * Whether the device is found
     * This interface simulates the front-end clicking the place button, and the specified device will be bound to the current mouse and placed on the canvas when the user clicks in the future.
     * The return time of this interface does not wait for the user to place the user. Once the device is bound to the mouse, this interface will immediately return the result of true.
     */
        placeComponentWithMouse(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem,         /** (Optional) */
        subPartName: string): Promise<boolean>;
        /**
         * (BETA) Set the AnalogGround Network Identification Device UUID in Extended API
         * @see pro-api.sch_primitivecomponent.setnetflagcomponentuuid_analogground.html
         */
    /** Is the operation successful? */
        setNetFlagComponentUuid_AnalogGround(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Set the device UUID associated with Ground Network Identification in Extended API
         * @see pro-api.sch_primitivecomponent.setnetflagcomponentuuid_ground.html
         */
    /** Is the operation successful? */
        setNetFlagComponentUuid_Ground(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Sets the Power Network Identification associated device UUID in the Extended API
         * @see pro-api.sch_primitivecomponent.setnetflagcomponentuuid_power.html
         */
    /** Is the operation successful? */
        setNetFlagComponentUuid_Power(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Set the device UUID associated with ProtectGround network identification in the extension API
         * @see pro-api.sch_primitivecomponent.setnetflagcomponentuuid_protectground.html
         */
    /** Is the operation successful? */
        setNetFlagComponentUuid_ProtectGround(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Sets the device UUID associated with the BI network port in the extended API
         * @see pro-api.sch_primitivecomponent.setnetportcomponentuuid_bi.html
         */
    /** Is the operation successful? */
        setNetPortComponentUuid_BI(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Set the device UUID associated with IN network port in the extension API
         * @see pro-api.sch_primitivecomponent.setnetportcomponentuuid_in.html
         */
    /** Is the operation successful? */
        setNetPortComponentUuid_IN(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
        /**
         * (BETA) Sets the device UUID associated with OUT network port in the extension API
         * @see pro-api.sch_primitivecomponent.setnetportcomponentuuid_out.html
         */
    /** Is the operation successful? */
        setNetPortComponentUuid_OUT(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
    }
    /**
     * Schematic & Symbol / Pin Primitive Class
     * @see ./pro-api.sch_primitivepin.html
     */
    /** Remark: Pin primitives are only available with the symbol editor. In the schematic page, the pins associated with the symbol are called Device Pin primitives */
    /** Signature: export declare class SCH_PrimitivePin implements ISCH_PrimitiveAPI */
    class SCH_PrimitivePin {
        /**
         * (BETA) Create pins
         * @see pro-api.sch_primitivepin.create.html
         */
    /** Pin element object */
        create(        /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** Pin number */
        pinNumber: string,         /** (Optional) Pin Name */
        pinName: string,         /** (Optional) Rotation angle, optional 0 90 180 270 */
        rotation: number,         /** (Optional) Pin Length */
        pinLength: number,         /** (Optional) pin color, null means default */
        pinColor: string | null,         /**
         * (Optional) Pin Shape
         * @see pro-api.esch_primitivepinshape.html
         */
        pinShape: ESCH_PrimitivePinShape,         /**
         * (Optional) Pin Type
         * @see pro-api.esch_primitivepintype.html
         */
        pinType: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;
        /**
         * (BETA) Remove pins
         * @see pro-api.sch_primitivepin.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Pin primitive ID or pin primitive object
         * @see pro-api.isch_primitivepin.html
         */
        primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;
        /**
         * (BETA) Get pins
         * @see pro-api.sch_primitivepin.get.html
         */
    /** Pin element object, undefined means acquisition failed */
        get(        /** The primitive ID of the pin can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitivePin | undefined>;
        /**
         * (BETA) Get pins
         * @see pro-api.sch_primitivepin.get_1.html
         */
    /**
     * Pin element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the pin can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin>>;
        /**
         * (BETA) Get all pins
         * @see pro-api.sch_primitivepin.getall.html
         */
    /** Pin element object array */
        getAll(): Promise<Array<ISCH_PrimitivePin>>;
        /**
         * (BETA) Get the primitive ID of all pins
         * @see pro-api.sch_primitivepin.getallprimitiveid.html
         */
    /** Pin primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify pins
         * @see pro-api.sch_primitivepin.modify.html
         */
    /** Pin element object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivepin.html
         */
        primitiveId: string | ISCH_PrimitivePin,         /**
         * Modify parameters
         * @see pro-api.esch_primitivepinshape.html
         */
        property: { x?: number; y?: number; pinNumber?: string; pinName?: string; rotation?: number; pinLength?: number; pinColor?: string | null; pinShape?: ESCH_PrimitivePinShape; pinType?: ESCH_PrimitivePinType; }): Promise<ISCH_PrimitivePin | undefined>;
    }
    /**
     * Schematic & Symbol / Polygon (Polyline) Primitive Class
     * @see ./pro-api.sch_primitivepolygon.html
     */
    /** Signature: export declare class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI */
    class SCH_PrimitivePolygon {
        /**
         * (BETA) Create a polygon
         * @see pro-api.sch_primitivepolygon.create.html
         */
    /** Polygonal primitive object */
        create(        /** Coordinate group, a continuous set of lines described by [x1, y1, x2, y2, x3, y3] */
        line: Array<number>,         /** (Optional) color, null means default */
        color: string | null,         /** (Optional) Fill color, none means no fill, null means default */
        fillColor: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;
        /**
         * (BETA) Delete polygons
         * @see pro-api.sch_primitivepolygon.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Polygon primitive ID or polygon primitive object
         * @see pro-api.isch_primitivepolygon.html
         */
        primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;
        /**
         * (BETA) Get polygons
         * @see pro-api.sch_primitivepolygon.get.html
         */
    /** Polygon primitive object, undefined means acquisition failed */
        get(        /** The primitive ID of a polygon can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;
        /**
         * (BETA) Get polygons
         * @see pro-api.sch_primitivepolygon.get_1.html
         */
    /**
     * Polygon primitive object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of a polygon can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;
        /**
         * (BETA) Get all polygons
         * @see pro-api.sch_primitivepolygon.getall.html
         */
    /** Array of polygon primitive objects */
        getAll(): Promise<Array<ISCH_PrimitivePolygon>>;
        /**
         * (BETA) Get the primitive ID of all polygons
         * @see pro-api.sch_primitivepolygon.getallprimitiveid.html
         */
    /** Polygon primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify polygons
         * @see pro-api.sch_primitivepolygon.modify.html
         */
    /** Polygonal primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivepolygon.html
         */
        primitiveId: string | ISCH_PrimitivePolygon,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { line?: Array<number>; color?: string | null; fillColor?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; }): Promise<ISCH_PrimitivePolygon | undefined>;
    }
    /**
     * Schematic & Symbol / Rectangle Primitive Class
     * @see ./pro-api.sch_primitiverectangle.html
     */
    /** Signature: export declare class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveRectangle {
        /**
         * Create a rectangle
         * @see pro-api.sch_primitiverectangle.create.html
         */
    /** Rectangular primitive object */
        create(        /** Top left point X */
        topLeftX: number,         /** Top left point Y */
        topLeftY: number,         /** Width */
        width: number,         /** high */
        height: number,         /** (Optional) Round corner radius */
        cornerRadius: number,         /** (Optional) Rotation angle, rotate around the upper left point, optional 0 90 180 270 */
        rotation: number,         /** (Optional) color, null means default */
        color: string | null,         /** (Optional) Fill color, none means no fill, null means default */
        fillColor: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null,         /**
         * (Optional) Fill style, null means default
         * @see pro-api.esch_primitivefillstyle.html
         */
        fillStyle: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;
        /**
         * Delete rectangle
         * @see pro-api.sch_primitiverectangle.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Rectangle primitive ID or rectangle primitive object
         * @see pro-api.isch_primitiverectangle.html
         */
        primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;
        /**
         * (BETA) Get the rectangle
         * @see pro-api.sch_primitiverectangle.get.html
         */
    /** Rectangular element object, undefined means acquisition failed */
        get(        /** The primitive ID of a rectangle can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;
        /**
         * (BETA) Get the rectangle
         * @see pro-api.sch_primitiverectangle.get_1.html
         */
    /**
     * Rectangular element object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of a rectangle can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;
        /**
         * Get all rectangles
         * @see pro-api.sch_primitiverectangle.getall.html
         */
    /** Array of rectangular primitive objects */
        getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;
        /**
         * Get the primitive ID of all rectangles
         * @see pro-api.sch_primitiverectangle.getallprimitiveid.html
         */
    /** Rectangle primitive ID array */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify rectangle
         * @see pro-api.sch_primitiverectangle.modify.html
         */
    /** Rectangular primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitiverectangle.html
         */
        primitiveId: string | ISCH_PrimitiveRectangle,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { topLeftX?: number; topLeftY?: number; width?: number; height?: number; cornerRadius?: number; rotation?: number; color?: string | null; fillColor?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; fillStyle?: ESCH_PrimitiveFillStyle | null; }): Promise<ISCH_PrimitiveRectangle | undefined>;
    }
    /**
     * Schematic & Symbol / Text Primitive Class
     * @see ./pro-api.sch_primitivetext.html
     */
    /** Signature: export declare class SCH_PrimitiveText implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveText {
        /**
         * (BETA) Create text
         * @see pro-api.sch_primitivetext.create.html
         */
    /** Text primitive object */
        create(        /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** Text content */
        content: string,         /** (Optional) Rotation angle, optional 0 90 180 270 */
        rotation: number,         /** (Optional) Text color, null means default */
        textColor: string | null,         /** (Optional) Font name, null means default */
        fontName: string | null,         /** (Optional) Font size, null means default */
        fontSize: number | null,         /** (Optional) Whether to thicken */
        bold: boolean,         /** (Optional) Whether italics */
        italic: boolean,         /** (Optional) Whether to underline */
        underLine: boolean,         /** (Optional) Alignment mode, 0 left top, 1 center top, 2 right top, 3 left middle, 4 middle middle, 5 right middle, 6 left bottom, 7 mid bottom, 8 right bottom */
        alignMode: number): Promise<ISCH_PrimitiveText | undefined>;
        /**
         * (BETA) Delete text
         * @see pro-api.sch_primitivetext.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Essential ID of text or text element object
         * @see pro-api.isch_primitivetext.html
         */
        primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;
        /**
         * (BETA) Get text
         * @see pro-api.sch_primitivetext.get.html
         */
    /** Text element object, undefined means acquisition failed */
        get(        /** The primitive ID of the text can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;
        /**
         * (BETA) Get text
         * @see pro-api.sch_primitivetext.get_1.html
         */
    /**
     * Text element object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the text can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;
        /**
         * (BETA) Get all text
         * @see pro-api.sch_primitivetext.getall.html
         */
    /** Text primitive object array */
        getAll(): Promise<Array<ISCH_PrimitiveText>>;
        /**
         * (BETA) Get the primitive ID of all text
         * @see pro-api.sch_primitivetext.getallprimitiveid.html
         */
    /** Element ID array of text */
        getAllPrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Modify text
         * @see pro-api.sch_primitivetext.modify.html
         */
    /** Text primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.isch_primitivetext.html
         */
        primitiveId: string | ISCH_PrimitiveText,         /** Modify parameters */
        property: { x?: number; y?: number; content?: string; rotation?: number; textColor?: string | null; fontName?: string | null; fontSize?: number | null; bold?: boolean; italic?: boolean; underLine?: boolean; alignMode?: number; }): Promise<ISCH_PrimitiveText | undefined>;
    }
    /**
     * Schematic & Symbol / Wire Primitive Class
     * @see ./pro-api.sch_primitivewire.html
     */
    /** Signature: export declare class SCH_PrimitiveWire implements ISCH_PrimitiveAPI */
    class SCH_PrimitiveWire {
        /**
         * (BETA) Create a wire
         * @see pro-api.sch_primitivewire.create.html
         */
    /** Wire element object */
        create(        /** Polyline coordinate groups, each segment is a continuous group of lines described in [x1, y1, x2, y2, x3, y3]. If the polylines have no connection to each other, the creation will fail. */
        line: Array<number> | Array<Array<number>>,         /** (Optional) Network name, if not specified, follow: 1. If no coordinates fall on any element, it defaults to an empty network; 2. If there is a coordinate point on the element of a network, follow the element; 3. If there is multiple coordinate points on the element of multiple different networks, creation fails. If specified, follow: 1. If there is one or more coordinate points on the element of other networks, and other elements are not explicitly specified (usually referring to containing network tags or network ports), other elements follow the specified network; 2. If other elements specify the network, creation fails. */
        net: string,         /** (Optional) Wire color, null means default */
        color: string | null,         /** (Optional) Line width, range 1-10, null means default */
        lineWidth: number | null,         /**
         * (Optional) Linear type, null means default
         * @see pro-api.esch_primitivelinetype.html
         */
        lineType: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
        /**
         * (BETA) Delete wires
         * @see pro-api.sch_primitivewire.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The element ID of the wire or the element object of the wire
         * @see pro-api.isch_primitivewire.html
         */
        primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;
        /**
         * (BETA) Get wires
         * @see pro-api.sch_primitivewire.get.html
         */
    /** Wire element object, undefined means acquisition failed */
        get(        /** The primitive ID of the wire can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;
        /**
         * (BETA) Get wires
         * @see pro-api.sch_primitivewire.get_1.html
         */
    /**
     * Wire element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the wire can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
        /**
         * (BETA) Get all wires
         * @see pro-api.sch_primitivewire.getall.html
         */
    /** Wire element object array */
        getAll(        /** (Optional) Network name */
        net: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
        /**
         * (BETA) Get the primitive ID of all wires
         * @see pro-api.sch_primitivewire.getallprimitiveid.html
         */
    /** Wire primitive ID array */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string | Array<string>): Promise<Array<string>>;
        /**
         * (BETA) Modify the wire
         * @see pro-api.sch_primitivewire.modify.html
         */
    /** Wire element object */
        modify(        /**
         * The element ID of the wire or the element object of the wire
         * @see pro-api.isch_primitivewire.html
         */
        primitiveId: string | ISCH_PrimitiveWire,         /**
         * Modify parameters
         * @see pro-api.esch_primitivelinetype.html
         */
        property: { line?: Array<number> | Array<Array<number>>; net?: string; color?: string | null; lineWidth?: number | null; lineType?: ESCH_PrimitiveLineType | null; }): Promise<ISCH_PrimitiveWire | undefined>;
    }
    /**
     * Schematic & Symbol / Selection Control Class
     * @see ./pro-api.sch_selectcontrol.html
     */
    /** Remark: Get or manipulate selected elements */
    /** Signature: export declare class SCH_SelectControl */
    class SCH_SelectControl {
        /**
         * Clear Selected
         * @see pro-api.sch_selectcontrol.clearselected.html
         */
    /** Is the operation successful? */
        clearSelected(): boolean;
        /**
         * Make cross selection
         * @see pro-api.sch_selectcontrol.docrossprobeselect.html
         */
    /** Is the operation successful? */
        doCrossProbeSelect(        /** (Optional) Device bit number */
        components: Array<string>,         /** (Optional) Device bit number_pin number, format ['U1_1', 'U1_2'] */
        pins: Array<string>,         /** (Optional) Network name */
        nets: Array<string>,         /** (Optional) Is it highlighted */
        highlight: boolean,         /** (Optional) Whether to select */
        select: boolean): boolean;
        /**
         * Use the primitive ID to select the primitive
         * @see pro-api.sch_selectcontrol.doselectprimitives.html
         */
    /** Is the operation successful? */
        doSelectPrimitives(        /** Essence ID */
        primitiveIds: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Query all selected entries IDs
         * @see pro-api.sch_selectcontrol.getallselectedprimitives_primitiveid.html
         */
    /** All selected primitive IDs */
        getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Query all selected primitive objects
         * @see pro-api.sch_selectcontrol.getallselectedprimitives.html
         */
    /** All selected primitive objects */
        getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
        /**
         * (BETA) Gets the current position of the mouse on the canvas
         * @see pro-api.sch_selectcontrol.getcurrentmouseposition.html
         */
    /** The position of the mouse on the canvas, undefined means that the current mouse is not on the canvas */
        getCurrentMousePosition(): Promise<{ x: number; y: number; } | undefined>;
        /**
         * Query the primitive ID of the selected primitive
         * @see pro-api.sch_selectcontrol.getselectedprimitives_primitiveid.html
         */
    /** The primitive ID of the selected primitive */
        getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Query all parameters of selected primitives
         * @see pro-api.sch_selectcontrol.getselectedprimitives.html
         */
    /** Select all parameters of the primitive */
        getSelectedPrimitives(): Promise<Array<Object>>;
    }
    /**
     * Schematic & Symbol / Utility Class
     * @see ./pro-api.sch_utils.html
     */
    /** Signature: export declare class SCH_Utils */
    class SCH_Utils {
    }
    /**
     * Schematic Primitive
     * @see ./pro-api.isch_primitive.html
     */
    /** Signature: export interface ISCH_Primitive */
    interface ISCH_Primitive {
        create: () => ISCH_Primitive | Promise<ISCH_Primitive>;
        done: () => ISCH_Primitive | Promise<ISCH_Primitive>;
        getState_PrimitiveId: () => string;
        getState_PrimitiveType: () => ESCH_PrimitiveType;
        isAsync: () => boolean;
        reset: () => ISCH_Primitive | Promise<ISCH_Primitive>;
        toAsync: () => ISCH_Primitive;
        toSync: () => ISCH_Primitive;
    }
    /**
     * Schematic Primitive Interface
     * @see ./pro-api.isch_primitiveapi.html
     */
    /** Signature: export interface ISCH_PrimitiveAPI */
    interface ISCH_PrimitiveAPI {
        create: (...args: any[]) => ISCH_Primitive | undefined | Promise<ISCH_Primitive> | Promise<ISCH_Primitive | undefined>;
        delete: (primitiveIds: string | any | Array<string> | Array<any>) => boolean | Promise<boolean>;
        get: { (primitiveIds: string): ISCH_Primitive | undefined | Promise<ISCH_Primitive | undefined>; (primitiveIds: Array<string>): Array<ISCH_Primitive> | Promise<Array<ISCH_Primitive>>; };
        getAll: (...args: any[]) => Array<ISCH_Primitive> | Promise<Array<ISCH_Primitive>>;
        getAllPrimitiveId: (...args: any[]) => Array<string> | Promise<Array<string>>;
        modify: (primitiveId: string | any, ...args: any[]) => ISCH_Primitive | undefined | Promise<ISCH_Primitive> | Promise<ISCH_Primitive | undefined>;
    }
    /**
     * Primitive Type
     * @see ./pro-api.esch_primitivetype.html
     */
    /** Signature: export declare enum ESCH_PrimitiveType */
    enum ESCH_PrimitiveType {
        /** Arc */
        ARC = "Arc",
        /** Third-order Bessel line */
        BEZIER = "Bezier",
        /** bus */
        BUS = "Bus",
        /** round */
        CIRCLE = "Circle",
        /** Devices */
        COMPONENT = "Component",
        /** Device pins */
        COMPONENT_PIN = "ComponentPin",
        /** oval */
        ELLIPSE = "Ellipse",
        /** Binary embedded objects */
        OBJECT = "Object",
        /** Pin */
        PIN = "Pin",
        /** Polygons */
        POLYGON = "Polygon",
        /** rectangle */
        RECTANGLE = "Rectangle",
        /** text */
        TEXT = "Text",
        /** wire */
        WIRE = "Wire",
    }
    /**
     * Component Type
     * @see ./pro-api.esch_primitivecomponenttype.html
     */
    /** Signature: export declare enum ESCH_PrimitiveComponentType */
    enum ESCH_PrimitiveComponentType {
        /** element */
        COMPONENT = "part",
        /** drawing */
        DRAWING = "sheet",
        /** Network Identification */
        NET_FLAG = "netflag",
        /** Network tags */
        NET_LABEL = "netlabel",
        /** Network port */
        NET_PORT = "netport",
        /** No electrical marking */
        NON_ELECTRICAL_FLAG = "nonElectrical_symbol",
        /** Short-circuit logo */
        SHORT_CIRCUIT_FLAG = "short_symbol",
    }
    /**
     * Pin Shape
     * @see ./pro-api.esch_primitivepinshape.html
     */
    /** Signature: export declare enum ESCH_PrimitivePinShape */
    enum ESCH_PrimitivePinShape {
        /** clock */
        CLOCK = "Clock",
        /** Reverse */
        INVERTED = "Inverted",
        /** Reverse clock */
        INVERTED_CLOCK = "Inverted Clock",
        /** none */
        NONE = "None",
    }
    /**
     * Pin Type
     * @see ./pro-api.esch_primitivepintype.html
     */
    /** Signature: export declare enum ESCH_PrimitivePinType */
    enum ESCH_PrimitivePinType {
        /** Two-way */
        BI = "BI",
        /** land */
        GROUND = "Ground",
        /** High resistance */
        HIZ = "HIZ",
        /** enter */
        IN = "IN",
        /** Open collector */
        OPEN_COLLECTOR = "Open Collector",
        /** Development of emitter */
        OPEN_EMITTER = "Open Emitter",
        /** Output */
        OUT = "OUT",
        /** No source */
        PASSIVE = "Passive",
        /** power supply */
        POWER = "Power",
        /** Signal terminal */
        TERMINATOR = "Terminator",
        /** Undefined */
        UNDEFINED = "Undefined",
    }
    /**
     * Arc Primitive
     * @see ./pro-api.isch_primitivearc.html
     */
    /** Signature: export declare class ISCH_PrimitiveArc implements ISCH_Primitive */
    interface ISCH_PrimitiveArc {
        // TODO: Define primitive properties
    }
    /**
     * Bus Primitive
     * @see ./pro-api.isch_primitivebus.html
     */
    /** Signature: export declare class ISCH_PrimitiveBus implements ISCH_Primitive */
    interface ISCH_PrimitiveBus {
        // TODO: Define primitive properties
    }
    /**
     * Circle Primitive
     * @see ./pro-api.isch_primitivecircle.html
     */
    /** Signature: export declare class ISCH_PrimitiveCircle implements ISCH_Primitive */
    interface ISCH_PrimitiveCircle {
        // TODO: Define primitive properties
    }
    /**
     * Component Primitive
     * @see ./pro-api.isch_primitivecomponent.html
     */
    /** Signature: export declare class ISCH_PrimitiveComponent implements ISCH_Primitive */
    interface ISCH_PrimitiveComponent {
        // TODO: Define primitive properties
    }
    /**
     * Pin Primitive
     * @see ./pro-api.isch_primitivepin.html
     */
    /** Remark: Pin primitives are only available with the symbol editor. In the schematic page, the pins associated with the symbol are called Device Pin primitives */
    /** Signature: export declare class ISCH_PrimitivePin implements ISCH_Primitive */
    interface ISCH_PrimitivePin {
        // TODO: Define primitive properties
    }
    /**
     * Component Pin Primitive
     * @see ./pro-api.isch_primitivecomponentpin.html
     */
    /** Remark: The device pin element is a special element that refers to the pins associated with symbols on the schematic canvas. */
    /** Signature: export declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin */
    interface ISCH_PrimitiveComponentPin {
        // TODO: Define primitive properties
    }
    /**
     * Polygon (Polyline) Primitive
     * @see ./pro-api.isch_primitivepolygon.html
     */
    /** Signature: export declare class ISCH_PrimitivePolygon implements ISCH_Primitive */
    interface ISCH_PrimitivePolygon {
        // TODO: Define primitive properties
    }
    /**
     * Rectangle Primitive
     * @see ./pro-api.isch_primitiverectangle.html
     */
    /** Signature: export declare class ISCH_PrimitiveRectangle implements ISCH_Primitive */
    interface ISCH_PrimitiveRectangle {
        // TODO: Define primitive properties
    }
    /**
     * Text Primitive
     * @see ./pro-api.isch_primitivetext.html
     */
    /** Signature: export declare class ISCH_PrimitiveText implements ISCH_Primitive */
    interface ISCH_PrimitiveText {
        // TODO: Define primitive properties
    }
    /**
     * Wire Primitive
     * @see ./pro-api.isch_primitivewire.html
     */
    /** Signature: export declare class ISCH_PrimitiveWire implements ISCH_Primitive */
    interface ISCH_PrimitiveWire {
        // TODO: Define primitive properties
    }
}
declare namespace PCBFootprint {
    /**
     * PCB & Footprint / Document Operations Class
     * @see ./pro-api.pcb_document.html
     */
    /** Remark: Operations on the overall design document */
    /** Signature: export declare class PCB_Document */
    class PCB_Document {
        /**
         * Enter the canvas coordinate to return the data coordinate corresponding to the coordinate
         * @see pro-api.pcb_document.convertcanvasorigintodataorigin.html
         */
    /**
     * Data origin coordinates
     * The coordinates displayed on the front end of the Jialichuang EDA are all the canvas origins; the Jialichuang EDA API uses the data origins; when creating a PCB, the default canvas origin is equal to the data origin.
     */
        convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{ x: number; y: number; }>;
        /**
         * Enter the data coordinates to return the corresponding canvas coordinates of the coordinates
         * @see pro-api.pcb_document.convertdataorigintocanvasorigin.html
         */
    /**
     * Canvas origin coordinates
     * The coordinates displayed on the front end of the Jialichuang EDA are all the canvas origins; the Jialichuang EDA API uses the data origins; when creating a PCB, the default canvas origin is equal to the data origin.
     */
        convertDataOriginToCanvasOrigin(        /** Data origin X */
        x: number,         /** Data origin Y */
        y: number): Promise<{ x: number; y: number; }>;
        /**
         * Get the current fly line calculation function status
         * @see pro-api.pcb_document.getcalculatingratlinestatus.html
         */
    /** Functional status */
        getCalculatingRatlineStatus(): Promise<EPCB_DocumentRatlineCalculatingActiveStatus>;
        /**
         * Get the offset coordinates of the canvas origin relative to the data origin
         * @see pro-api.pcb_document.getcanvasorigin.html
         */
    /**
     * The offset coordinates of the canvas origin relative to the data origin
     * The coordinates displayed on the front end of the Jialichuang EDA Professional Edition are all the canvas origins;
     * All the data origins used by the Jialichuang EDA Professional API are data origins;
     * If the returned data is { canvasOriginOffsetX: 100, canvasOriginOffsetY: 200 }, it represents the position where the canvas origin is 100 units to the right and 200 units upwards of the data origin;
     * The units here are data-level units, which are equivalent to mil at the canvas level in span
     */
        getCanvasOrigin(): Promise<{ offsetX: number; offsetY: number; }>;
        /**
         * (BETA) Import automatic layout files (JSON)
         * @see pro-api.pcb_document.importautolayoutjsonfile.html
         */
    /**
     * Is the import operation successful?
     * You can use SYS_FileSystem.openReadFileDialog() to read into the file
     */
        importAutoLayoutJsonFile(        /** JSON file to be imported */
        autoLayoutFile: File): Promise<boolean>;
        /**
         * (BETA) Importing automatic cabling files (JSON)
         * @see pro-api.pcb_document.importautoroutejsonfile.html
         */
    /**
     * Is the import operation successful?
     * You can use SYS_FileSystem.openReadFileDialog() to read into the file
     */
        importAutoRouteJsonFile(        /** JSON file to be imported */
        autoRouteFile: File): Promise<boolean>;
        /**
         * Import changes from schematic diagram
         * @see pro-api.pcb_document.importchanges.html
         */
    /** Whether the import operation is successful, the free PCB with the UUID that failed to pass in the schematic will return false */
        importChanges(        /** (Optional) Schematic UUID, default to the schematic associated with the same board */
        uuid: string): Promise<boolean>;
        /**
         * Positioning to the canvas coordinates
         * @see pro-api.pcb_document.navigatetocoordinates.html
         */
    /**
     * Is the operation successful?
     * This interface locates the specified data-level coordinates on the front-end canvas;
     * If you want the front-end canvas coordinates to be consistent with the incoming data when performing this operation, it is recommended to call the PCB_Document.setCanvasOrigin() method and set the offset to zero;
     * The units here are data-level units, which are equivalent to mil at the canvas level in span
     */
        navigateToCoordinates(        /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number): Promise<boolean>;
        /**
         * Save the document
         * @see pro-api.pcb_document.save.html
         */
    /** Whether the save operation is successful, and errors such as the failure to save and upload fail will be returned to false. */
        save(uuid: string): Promise<boolean>;
        /**
         * Set the offset coordinates of the canvas origin relative to the data origin
         * @see pro-api.pcb_document.setcanvasorigin.html
         */
    /**
     * Is the operation successful?
     * The coordinates displayed on the front end of the Jialichuang EDA Professional Edition are all the canvas origins;
     * All the data origins used by the Jialichuang EDA Professional API are data origins;
     * If you want the front-end canvas coordinates to be consistent with the data during API operation, it is recommended to call this method and set the offset to zero, that is, setCanvasOrigin(0, 0);
     * The units here are data-level units, which are equivalent to mil at the canvas level in span
     */
        setCanvasOrigin(        /** The X coordinate offset of the canvas origin relative to the data origin */
        offsetX: number,         /** Y coordinate offset of the canvas origin relative to the data origin */
        offsetY: number): Promise<boolean>;
        /**
         * Activate the fly line calculation function
         * @see pro-api.pcb_document.startcalculatingratline.html
         */
    /**
     * Is the operation successful?
     * At startup, a fly line calculation will be triggered
     */
        startCalculatingRatline(): Promise<boolean>;
        /**
         * Stop the fly line calculation function
         * @see pro-api.pcb_document.stopcalculatingratline.html
         */
    /** Is the operation successful? */
        stopCalculatingRatline(): Promise<boolean>;
    }
    /**
     * PCB & Footprint / Design Rule Check (DRC) Class
     * @see ./pro-api.pcb_drc.html
     */
    /** Remark: Check and set DRC rules */
    /** Signature: export declare class PCB_Drc */
    class PCB_Drc {
        /**
         * (BETA) Add a network to an isometric network group
         * @see pro-api.pcb_drc.addnettoequallengthnetgroup.html
         */
    /** Is the operation successful? */
        addNetToEqualLengthNetGroup(        /** Isometric network group name */
        equalLengthNetGroupName: string,         /** Network name */
        net: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Add a network to a network class
         * @see pro-api.pcb_drc.addnettonetclass.html
         */
    /** Is the operation successful? */
        addNetToNetClass(        /** Network class name */
        netClassName: string,         /** Network name */
        net: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Add pad pairs to pad pair groups
         * @see pro-api.pcb_drc.addpadpairtopadpairgroup.html
         */
    /**
     * Is the operation successful?
     * There are three different uses to ensure that the corresponding pads are already on the canvas. 1. Free pad - free pad; 2. Device pad - device pad; 3. Device pad - free pad await eda.pcb_Drc.addPadPairToPadPairGroup('test',['e0','e1']) // Free pad - free pad await eda.pcb_Drc.addPadPairToPadPairGroup('test',['R1:1','R1:2']) // Device pad - free pad
     */
        addPadPairToPadPairGroup(        /** Pad pair group name */
        padPairGroupName: string,         /** Pad pair */
        padPair: [string, string] | Array<[string, string]>): Promise<boolean>;
        /**
         * (BETA) Check DRC
         * @see pro-api.pcb_drc.check.html
         */
    /** DRC check whether it passes */
        check(        /** Whether to strictly check, the current PCB is unified into a strict inspection mode */
        strict: boolean,         /** Whether to display the UI (bottom DRC window at the call out) */
        userInterface: boolean,         /** Whether to include detailed error information in the return value, if true, the return value will always be an array */
        includeVerboseError: false): Promise<boolean>;
        /**
         * (BETA) Check DRC
         * @see pro-api.pcb_drc.check_1.html
         */
    /** Detailed results of DRC inspection */
        check(        /** Whether to strictly check, the current PCB is unified into a strict inspection mode */
        strict: boolean,         /** Whether to display the UI (bottom DRC window at the call out) */
        userInterface: boolean,         /** Whether to include detailed error information in the return value, if true, the return value will always be an array */
        includeVerboseError: true): Promise<Array<any>>;
        /**
         * (BETA) Create differential pairs
         * @see pro-api.pcb_drc.createdifferentialpair.html
         */
    /** Is the operation successful? */
        createDifferentialPair(        /** Differential pair name */
        differentialPairName: string,         /** The network name */
        positiveNet: string,         /** Negative network name */
        negativeNet: string): Promise<boolean>;
        /**
         * (BETA) Create equal length network groups
         * @see pro-api.pcb_drc.createequallengthnetgroup.html
         */
    /** Is the operation successful? */
        createEqualLengthNetGroup(        /** Isometric network group name */
        equalLengthNetGroupName: string,         /** Network name array */
        nets: Array<string>,         /**
         * Isometric network group color
         * @see pro-api.ipcb_equallengthnetgroupitem.html
         */
        color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;
        /**
         * (BETA) Create a network class
         * @see pro-api.pcb_drc.createnetclass.html
         */
    /** Is the operation successful? */
        createNetClass(        /** Network class name */
        netClassName: string,         /** Network name array */
        nets: Array<string>,         /**
         * Network color
         * @see pro-api.ipcb_equallengthnetgroupitem.html
         */
        color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;
        /**
         * (BETA) Create pad pairs
         * @see pro-api.pcb_drc.createpadpairgroup.html
         */
    /**
     * Is the operation successful?
     * There are three different uses to ensure that the corresponding pads are already on the canvas. are: 1. Free pad - Free pad; 2. Device pad - Device pad; 3. Device pad - Free pad await eda.pcb_Drc.createPadPairGroup('test',[['e0','e1']]) // Free pad - Free pad await eda.pcb_Drc.createPadPairGroup('test',[['R1:1','R1:2'],['R2:1','R2:2']]) // Device pad - Device pad await eda.pcb_Drc.createPadPairGroup('test',[['R1:1','e0'],['R1:2','e1']]]) // Device pad - Free solder pad
     */
        createPadPairGroup(        /** Pad pair group name */
        padPairGroupName: string,         /** Pad p-array */
        padPairs: Array<[string, string]>): Promise<boolean>;
        /**
         * (BETA) Delete differential pairs
         * @see pro-api.pcb_drc.deletedifferentialpair.html
         */
    /** Is the operation successful? */
        deleteDifferentialPair(        /** Differential pair name */
        differentialPairName: string): Promise<boolean>;
        /**
         * (BETA) Delete equal length network groups
         * @see pro-api.pcb_drc.deleteequallengthnetgroup.html
         */
    /** Is the operation successful? */
        deleteEqualLengthNetGroup(        /** Isometric network group name */
        equalLengthNetGroupName: string): Promise<boolean>;
        /**
         * (BETA) Delete network classes
         * @see pro-api.pcb_drc.deletenetclass.html
         */
    /** Is the operation successful? */
        deleteNetClass(        /** Network class name */
        netClassName: string): Promise<boolean>;
        /**
         * (BETA) Delete pad pairs
         * @see pro-api.pcb_drc.deletepadpairgroup.html
         */
    /** Is the operation successful? */
        deletePadPairGroup(        /** Pad pair group name */
        padPairGroupName: string): Promise<boolean>;
        /**
         * (BETA) Delete design rules configuration
         * @see pro-api.pcb_drc.deleteruleconfiguration.html
         */
    /**
     * Whether the deletion was successful
     * System configuration does not allow deletion
     */
        deleteRuleConfiguration(        /** Configuration name */
        configurationName: string): Promise<boolean>;
        /**
         * (BETA) Gets detailed properties for all differential pairs
         * @see pro-api.pcb_drc.getalldifferentialpairs.html
         */
    /** Detailed properties of all differential pairs */
        getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem>>;
        /**
         * (BETA) Gets detailed properties for all equal length network groups
         * @see pro-api.pcb_drc.getallequallengthnetgroups.html
         */
    /** Detailed properties of all equal length network groups */
        getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>;
        /**
         * (BETA) Get detailed properties of all network classes
         * @see pro-api.pcb_drc.getallnetclasses.html
         */
    /** Detailed properties of all network classes */
        getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;
        /**
         * (BETA) Gets detailed properties for all pad pairs
         * @see pro-api.pcb_drc.getallpadpairgroups.html
         */
    /** Detailed properties of all pad pairs */
        getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;
        /**
         * (BETA) Get all design rules configurations
         * @see pro-api.pcb_drc.getallruleconfigurations.html
         */
    /** All design rules and configurations */
        getAllRuleConfigurations(        /** (Optional) Whether to obtain system design rules and configuration */
        includeSystem: boolean): Promise<Array<{ [key: string]: any; }>>;
        /**
         * (BETA) Get the current design rule configuration
         * @see pro-api.pcb_drc.getcurrentruleconfiguration.html
         */
    /** The current design rule configuration, undefined failed to obtain */
        getCurrentRuleConfiguration(): Promise<{ [key: string]: any; } | undefined>;
        /**
         * Get the current design rule configuration name
         * @see pro-api.pcb_drc.getcurrentruleconfigurationname.html
         */
    /** The current design rule configuration name, undefined failed to obtain */
        getCurrentRuleConfigurationName(): Promise<string | undefined>;
        /**
         * (BETA) Get the name of the new PCB default design rule configuration
         * @see pro-api.pcb_drc.getdefaultruleconfigurationname.html
         */
    /** The name of the default design rule configuration, undefined is failed to obtain */
        getDefaultRuleConfigurationName(): Promise<string | undefined>;
        /**
         * (BETA) Get Network-Network Rules
         * @see pro-api.pcb_drc.getnetbynetrules.html
         */
    /** All networks of the current PCB - network rules */
        getNetByNetRules(): Promise<{ [key: string]: any; }>;
        /**
         * (BETA) Get network rules
         * @see pro-api.pcb_drc.getnetrules.html
         */
    /** All network rules for the current PCB */
        getNetRules(): Promise<Array<{ [key: string]: any; }>>;
        /**
         * (BETA) Get the minimum wire length of the pad pair group
         * @see pro-api.pcb_drc.getpadpairgroupminwirelength.html
         */
    /** Minimum wire length for all pad pairs */
        getPadPairGroupMinWireLength(        /** Pad pair group name */
        padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>;
        /**
         * (BETA) Get Regional Rules
         * @see pro-api.pcb_drc.getregionrules.html
         */
        getRegionRules(): Promise<Array<{ [key: string]: any; }>>;
        /**
         * Get the specified design rule configuration
         * @see pro-api.pcb_drc.getruleconfiguration.html
         */
    /** Design rules are configured, undefined is that the design rules do not exist */
        getRuleConfiguration(        /** Configuration name */
        configurationName: string): Promise<{ [key: string]: any; } | undefined>;
        /**
         * (BETA) Modify the name of the differential pair
         * @see pro-api.pcb_drc.modifydifferentialpairname.html
         */
    /** Is the operation successful? */
        modifyDifferentialPairName(        /** Original difference pair name */
        originalDifferentialPairName: string,         /** New differential pair name */
        differentialPairName: string): Promise<boolean>;
        /**
         * (BETA) Modify differential to negative networks
         * @see pro-api.pcb_drc.modifydifferentialpairnegativenet.html
         */
    /** Is the operation successful? */
        modifyDifferentialPairNegativeNet(        /** Differential pair name */
        differentialPairName: string,         /** Negative network name */
        negativeNet: string): Promise<boolean>;
        /**
         * (BETA) Modify differential alignment network
         * @see pro-api.pcb_drc.modifydifferentialpairpositivenet.html
         */
    /** Is the operation successful? */
        modifyDifferentialPairPositiveNet(        /** Differential pair name */
        differentialPairName: string,         /** The network name */
        positiveNet: string): Promise<boolean>;
        /**
         * (BETA) Modify the name of the equal length network group
         * @see pro-api.pcb_drc.modifyequallengthnetgroupname.html
         */
    /** Is the operation successful? */
        modifyEqualLengthNetGroupName(        /** Original equal length network group name */
        originalEqualLengthNetGroupName: string,         /** New isometric network group name */
        equalLengthNetGroupName: string): Promise<boolean>;
        /**
         * (BETA) Modify the name of the network class
         * @see pro-api.pcb_drc.modifynetclassname.html
         */
    /** Is the operation successful? */
        modifyNetClassName(        /** Original network class name */
        originalNetClassName: string,         /** New network class name */
        netClassName: string): Promise<boolean>;
        /**
         * (BETA) Modify the name of the pad pair group
         * @see pro-api.pcb_drc.modifypadpairgroupname.html
         */
    /** Is the operation successful? */
        modifyPadPairGroupName(        /** Original pad pair name */
        originalPadPairGroupName: string,         /** New pad pair name */
        padPairGroupName: string): Promise<boolean>;
        /**
         * (BETA) Overwrite network-network rules
         * @see pro-api.pcb_drc.overwritenetbynetrules.html
         */
    /**
     * Is the override successful?
     * All network-network rules of the current PCB will be overwritten, please pay attention to the risk of data loss
     */
        overwriteNetByNetRules(        /** Network-Network Rules */
        netByNetRules: { [key: string]: any; }): Promise<boolean>;
        /**
         * (BETA) Overwrite network rules
         * @see pro-api.pcb_drc.overwritenetrules.html
         */
    /**
     * Is the override successful?
     * All network rules of the current PCB will be overwritten, please be aware of the risk of data loss
     */
        overwriteNetRules(        /** Network rules */
        netRules: Array<{ [key: string]: any; }>): Promise<boolean>;
        /**
         * (BETA) Override Region Rules
         * @see pro-api.pcb_drc.overwriteregionrules.html
         */
    /**
     * Is the override successful?
     * All regional rules of the current PCB will be overwritten, please be aware of the risk of data loss
     */
        overwriteRegionRules(        /** Regional rules */
        regionRules: Array<{ [key: string]: any; }>): Promise<boolean>;
        /**
         * (BETA) Remove network from equal length network group
         * @see pro-api.pcb_drc.removenetfromequallengthnetgroup.html
         */
    /** Is the operation successful? */
        removeNetFromEqualLengthNetGroup(        /** Isometric network group name */
        equalLengthNetGroupName: string,         /** Network name */
        net: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Remove network from network class
         * @see pro-api.pcb_drc.removenetfromnetclass.html
         */
    /** Is the operation successful? */
        removeNetFromNetClass(        /** Network class name */
        netClassName: string,         /** Network name */
        net: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Remove pad pairs from pad pairs group
         * @see pro-api.pcb_drc.removepadpairfrompadpairgroup.html
         */
    /**
     * Is the operation successful?
     * There are three different uses to ensure that the corresponding pads are already on the canvas. 1. Free pad - free pad; 2. Device pad - device pad; 3. Device pad - free pad await eda.pcb_Drc.removePadPairFromPadPairGroup('test',['e0','e1']) // Free pad - free pad await eda.pcb_Drc.removePadPairFromPadPairGroup('test',['R1:1','R1:2']) // Device pad - free pad
     */
        removePadPairFromPadPairGroup(        /** Pad pair group name */
        padPairGroupName: string,         /** Pad pair */
        padPair: [string, string] | Array<[string, string]>): Promise<boolean>;
        /**
         * (BETA) Rename design rule configuration
         * @see pro-api.pcb_drc.renameruleconfiguration.html
         */
    /**
     * Is the renaming successful?
     * Only custom configurations can be renamed, system configurations do not allow renaming.
     */
        renameRuleConfiguration(        /** Original design rule configuration name */
        originalConfigurationName: string,         /** New design rule configuration name */
        configurationName: string): Promise<boolean>;
        /**
         * (BETA) Save design rules configuration
         * @see pro-api.pcb_drc.saveruleconfiguration.html
         */
    /**
     * Successful saving
     * Only custom configurations can be overwritten and saved, and system configurations do not allow modification and override.
     */
        saveRuleConfiguration(        /** Design rules and configuration */
        ruleConfiguration: { [key: string]: any; },         /** Configuration name */
        configurationName: string,         /** (Optional) Whether overwriting the same-name design rule configuration is allowed. False will return false when encountering the same-name design rule configuration. Please note the possible risk of data loss. */
        allowOverwrite: boolean): Promise<boolean>;
        /**
         * (BETA) Set to New PCB Default Design Rules Configuration
         * @see pro-api.pcb_drc.setasdefaultruleconfiguration.html
         */
    /**
     * Whether the setting is successful
     * The return value is result-oriented, and repeated setting of the same design rule as the default design rule will also return true
     */
        setAsDefaultRuleConfiguration(        /** Configuration name */
        configurationName: string): Promise<boolean>;
    }
    /**
     * PCB & Footprint / Event Class
     * @see ./pro-api.pcb_event.html
     */
    /** Remark: Register event callback */
    /** Signature: export declare class PCB_Event */
    class PCB_Event {
        /**
         * Added mouse event monitoring
         * @see pro-api.pcb_event.addmouseeventlistener.html
         */
        addMouseEventListener(        /** Event ID to prevent duplicate registration of events */
        id: string,         /** Event Type */
        eventType: 'all' | 'selected' | 'clearSelected',         /** Callback function when event triggers */
        callFn: (eventType: 'selected' | 'clearSelected') => void | Promise<void>,         /** (Optional) Whether to listen only once */
        onlyOnce: boolean): void;
        /**
         * Query whether the event listening exists
         * @see pro-api.pcb_event.iseventlisteneralreadyexist.html
         */
    /** Whether event listening exists */
        isEventListenerAlreadyExist(        /** Event ID */
        id: string): boolean;
        /**
         * Remove event listening
         * @see pro-api.pcb_event.removeeventlistener.html
         */
    /** Whether to remove the specified event listening */
        removeEventListener(        /** Event ID */
        id: string): boolean;
    }
    /**
     * PCB & Footprint / Layer Operations Class
     * @see ./pro-api.pcb_layer.html
     */
    /** Signature: export declare class PCB_Layer */
    class PCB_Layer {
        /**
         * (BETA) Added a custom layer
         * @see pro-api.pcb_layer.addcustomlayer.html
         */
    /** The layer ID of the newly added custom layer, if undefined, it will be a new failure, which may be that the number of custom layers has reached the upper limit. */
        addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;
        /**
         * (BETA) Get detailed properties for all layers
         * @see pro-api.pcb_layer.getalllayers.html
         */
    /** Detailed properties of all layers */
        getAllLayers(): Promise<Array<IPCB_LayerItem>>;
        /**
         * (BETA) Locking layer
         * @see pro-api.pcb_layer.locklayer.html
         */
    /** Is the operation successful? */
        lockLayer(        /**
         * (Optional) layer, if no layer is specified, it defaults to all layers
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;
        /**
         * (BETA) Modify layer properties
         * @see pro-api.pcb_layer.modifylayer.html
         */
    /**
     * If the modified layer attribute is undefined, it means that the modification failed or the layer does not exist.
     * Only the inner layer and custom layer allow the name to be modified; only the inner layer allows the type to be modified, and the transparency only supports numbers between 0-100
     */
        modifyLayer(        /**
         * layer
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable,         /**
         * property
         * @see pro-api.tpcb_layertypesofinnerlayer.html
         */
        property: { name?: string; type?: TPCB_LayerTypesOfInnerLayer; color?: string; transparency?: number; }): Promise<boolean>;
        /**
         * (BETA) Remove layer
         * @see pro-api.pcb_layer.removelayer.html
         */
    /**
     * Is the operation successful?
     * Currently only the removal of custom layers is supported
     */
        removeLayer(        /**
         * layer
         * @see pro-api.tpcb_layersofcustom.html
         */
        layer: TPCB_LayersOfCustom): Promise<boolean>;
        /**
         * Select the layer
         * @see pro-api.pcb_layer.selectlayer.html
         */
    /** Whether the operation is successful, if the specified layer does not exist, it will return false */
        selectLayer(        /**
         * layer
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable): Promise<boolean>;
        /**
         * (BETA) Set the non-activated layer display mode
         * @see pro-api.pcb_layer.setinactivelayerdisplaymode.html
         */
    /** Whether the settings are successful */
        setInactiveLayerDisplayMode(        /**
         * (Optional) Display Mode
         * @see pro-api.epcb_inactivelayerdisplaymode.html
         */
        displayMode: EPCB_InactiveLayerDisplayMode): Promise<boolean>;
        /**
         * (BETA) Set the non-activated layer transparency
         * @see pro-api.pcb_layer.setinactivelayertransparency.html
         */
    /** Is the operation successful? */
        setInactiveLayerTransparency(        /** Transparency, range 0-100 */
        transparency: number): Promise<boolean>;
        /**
         * (BETA) Set layer color configuration
         * @see pro-api.pcb_layer.setlayercolorconfiguration.html
         */
    /** Is the operation successful? */
        setLayerColorConfiguration(        /**
         * Color configuration
         * @see pro-api.epcb_layercolorconfiguration.html
         */
        colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>;
        /**
         * (BETA) Set the layer to invisible
         * @see pro-api.pcb_layer.setlayerinvisible.html
         */
    /** Is the operation successful? */
        setLayerInvisible(        /**
         * (Optional) layer, if no layer is specified, it defaults to all layers
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>,         /** (Optional) Whether to set other layers to be visible */
        setOtherLayerVisible: boolean): Promise<boolean>;
        /**
         * (BETA) Set the layer to visible
         * @see pro-api.pcb_layer.setlayervisible.html
         */
    /** Is the operation successful? */
        setLayerVisible(        /**
         * (Optional) layer, if no layer is specified, it defaults to all layers
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>,         /** (Optional) Whether to set other layers to be invisible */
        setOtherLayerInvisible: boolean): Promise<boolean>;
        /**
         * (BETA) Setting PCB type
         * @see pro-api.pcb_layer.setpcbtype.html
         */
    /**
     * Is the operation successful?
     * This is mainly to adapt to the design of the FPC soft board. If the PCB type is set to the FPC soft board, a new FPC reinforcement layer will be added.
     * Please note:
     * Jialichuang does not currently support the production of FPC soft boards with more than 2 layers of copper foil;
     * When switching PCB type from FPC softboard to normal sheet, any primitives on the FPC reinforcement layer need to be pre-deleted, otherwise the switch will not be possible and the result of false will be returned.
     */
        setPcbType(        /**
         * PCB Type
         * @see pro-api.epcb_pcbplatetype.html
         */
        pcbType: EPCB_PcbPlateType): Promise<boolean>;
        /**
         * (BETA) Set the number of copper foil layers
         * @see pro-api.pcb_layer.setthenumberofcopperlayers.html
         */
    /**
     * Is the operation successful?
     * The newly created PCB document has two copper foil layers by default
     */
        setTheNumberOfCopperLayers(        /** Number of layers */
        numberOfLayers: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32): Promise<boolean>;
        /**
         * (BETA) Cancel the lock layer
         * @see pro-api.pcb_layer.unlocklayer.html
         */
    /** Is the operation successful? */
        unlockLayer(        /**
         * (Optional) layer, if no layer is specified, it defaults to all layers
         * @see pro-api.tpcb_layersintheselectable.html
         */
        layer: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;
    }
    /**
     * PCB & Footprint / Manufacturing Data Class
     * @see ./pro-api.pcb_manufacturedata.html
     */
    /** Remark: Obtain the current PCB's production materials documents and quickly place an order */
    /** Signature: export declare class PCB_ManufactureData */
    class PCB_ManufactureData {
        /**
         * (BETA) Delete BOM templates
         * @see pro-api.pcb_manufacturedata.deletebomtemplate.html
         */
    /** Is the operation successful? */
        deleteBomTemplate(        /** BOM template name */
        template: string): Promise<boolean>;
        /**
         * (BETA) Get 3D model files
         * @see pro-api.pcb_manufacturedata.get3dfile.html
         */
    /**
     * 3D model file data
     * Please note: Only component models imported in STEP format can be reflected in the exported STEP file
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        get3DFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'step' | 'obj',         /** (Optional) Export object */
        element: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>,         /** (Optional) Export mode, Outfit = Assembly, Parts = Parts */
        modelMode: 'Outfit' | 'Parts',         /** (Optional) Whether to automatically generate a 3D model for components that are not bound to 3D models (based on the component's "height" attribute) */
        autoGenerateModels: boolean): Promise<File | undefined>;
        /**
         * (BETA) Get 3D shell files
         * @see pro-api.pcb_manufacturedata.get3dshellfile.html
         */
    /**
     * 3D shell file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        get3DShellFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'stl' | 'step' | 'obj'): Promise<File | undefined>;
        /**
         * (BETA) Get Altium Designer files
         * @see pro-api.pcb_manufacturedata.getaltiumdesignerfile.html
         */
    /**
     * Altium Designer File Data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getAltiumDesignerFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Getting Automatic Layout Files (JSON)
         * @see pro-api.pcb_manufacturedata.getautolayoutjsonfile.html
         */
    /**
     * Automatically layout JSON file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getAutoLayoutJsonFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Getting Automatic Cabling Files (JSON)
         * @see pro-api.pcb_manufacturedata.getautoroutejsonfile.html
         */
    /**
     * Automatic cabling of JSON file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getAutoRouteJsonFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Get BOM files
         * @see pro-api.pcb_manufacturedata.getbomfile.html
         */
    /**
     * BOM file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getBomFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'xlsx' | 'csv',         /** (Optional) Template name */
        template: string,         /** (Optional) Filtering rules should only include rules that need to be enabled, property is the rule name, and includeValue is the matching value */
        filterOptions: Array<{ property: string; includeValue: boolean | string; }>,         /** (Optional) Statistics, containing the names of all statistics that need to be enabled */
        statistics: Array<string>,         /** (Optional) property, containing the names of all attributes that need to be enabled */
        property: Array<string>,         /**
         * (Optional) column attributes and sorts. If title, sort, group, orderWeight is not passed in, the default value will be taken. null means **None** or **Nine**
         * @see pro-api.ipcb_bompropertiestablecolumns.html
         */
        columns: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;
        /**
         * (BETA) Get BOM template file
         * @see pro-api.pcb_manufacturedata.getbomtemplatefile.html
         */
    /** BOM template file */
        getBomTemplateFile(        /** BOM template name */
        template: string): Promise<File | undefined>;
        /**
         * (BETA) Get a list of BOM templates
         * @see pro-api.pcb_manufacturedata.getbomtemplates.html
         */
    /** BOM template list */
        getBomTemplates(): Promise<string[]>;
        /**
         * (BETA) Getting Automatic Cabling Files (DSN)
         * @see pro-api.pcb_manufacturedata.getdsnfile.html
         */
    /**
     * Automatic cabling DSN file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getDsnFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Get DXF files
         * @see pro-api.pcb_manufacturedata.getdxffile.html
         */
    /**
     * DXF file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getDxfFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) Export layer */
        layers: Array<{ layerId: number; mirror: boolean; }>,         /** (Optional) Export object */
        objects: Array<string>): Promise<File | undefined>;
        /**
         * (BETA) Obtain flying needle test files
         * @see pro-api.pcb_manufacturedata.getflyingprobetestfile.html
         */
    /** Flying needle test file data */
        getFlyingProbeTestFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Obtain PCB plate making file (Gerber)
         * @see pro-api.pcb_manufacturedata.getgerberfile.html
         */
    /**
     * PCB plate making file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getGerberFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) Whether to generate color silk screen printing manufacturing files (Jalichuang special file) */
        colorSilkscreen: boolean,         /**
         * (Optional) Unit
         * @see pro-api.esys_unit.html
         */
        unit: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH,         /** (Optional) Number format */
        digitalFormat: { integerNumber: number; decimalNumber: number; },         /** (Optional) Other */
        other: { metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean; },         /** (Optional) export layer, by default, export according to Jialichuang production requirements */
        layers: Array<{ layerId: number; isMirror: boolean; }>,         /** (Optional) export objects, by default, export according to Jialichuang production requirements */
        objects: Array<'Pad' | 'Via' | 'Track' | 'Text' | 'Image' | 'Dimension' | 'BoardOutline' | 'BoardCutout' | 'CopperFilled' | 'SolidRegion' | 'FPCStiffener' | 'Line' | 'PlaneZone' | 'ComponentProperty' | 'ComponentSilkscreen' | 'TearDrop'>): Promise<File | undefined>;
        /**
         * (BETA) Obtain IPC-D-356A file
         * @see pro-api.pcb_manufacturedata.getipcd356afile.html
         */
    /**
     * IPC-D-356A File Data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getIpcD356AFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Get Netlist Files (Netlist)
         * @see pro-api.pcb_manufacturedata.getnetlistfile.html
         */
    /**
     * Netlist file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getNetlistFile(        /** (Optional) File name */
        fileName: string,         /**
         * (Optional) Netlist Type
         * @see pro-api.esys_netlisttype.html
         */
        netlistType: ESYS_NetlistType): Promise<File | undefined>;
        /**
         * (BETA) Get ODB++ files
         * @see pro-api.pcb_manufacturedata.getopendatabasedoubleplusfile.html
         */
    /**
     * ODB++ file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getOpenDatabaseDoublePlusFile(        /** (Optional) File name */
        fileName: string,         /**
         * (Optional) Unit
         * @see pro-api.esys_unit.html
         */
        unit: ESYS_Unit.INCH,         /** (Optional) Other */
        otherData: { metallizedDrilledHoles?: boolean; nonMetallizedDrilledHoles?: boolean; drillTable?: boolean; flyingProbeTestFile?: boolean; },         /** (Optional) export layer, by default, export according to Jialichuang production requirements */
        layers: Array<{ layerId: number; mirror: boolean; }>,         /** (Optional) export objects, by default, export according to Jialichuang production requirements */
        objects: Array<{ objectName: string; }>): Promise<File | undefined>;
        /**
         * (BETA) Get PADS files
         * @see pro-api.pcb_manufacturedata.getpadsfile.html
         */
    /**
     * PADS file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getPadsFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Obtain PCB information files
         * @see pro-api.pcb_manufacturedata.getpcbinfofile.html
         */
    /**
     * PCB information file
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getPcbInfoFile(        /** (Optional) File name */
        fileName: string): Promise<File | undefined>;
        /**
         * (BETA) Get PDF files
         * @see pro-api.pcb_manufacturedata.getpdffile.html
         */
    /**
     * PDF file data (or compressed package)
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     * The outputMethod, contentConfig, watermark parameters are temporarily unavailable, waiting for later planning
     */
        getPdfFile(        /** (Optional) File name */
        fileName: string,         /**
         * (Optional) Output method
         * @see pro-api.epcb_pdfoutputmethod.html
         */
        outputMethod: EPCB_PdfOutputMethod,         /** (Optional) Content Configuration */
        contentConfig: { displayAttributesAsMenu: boolean; showOutlineOnly: boolean; },         /** (Optional) Watermark */
        watermark: { show?: boolean; content?: string; styleConfig?: { color: string; transparency: 'Opaque' | '75%' | '50%' | '25%'; font: string; fontSize: string; style: { blood: boolean; italic: boolean; underline: boolean; }; slope: 0 | 45 | 90; denseness: 'Single' | 'Sparse' | 'Std' | 'Dense'; }; }): Promise<File | undefined>;
        /**
         * (BETA) Get coordinate file (PickAndPlace)
         * @see pro-api.pcb_manufacturedata.getpickandplacefile.html
         */
    /**
     * Coordinate file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getPickAndPlaceFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'xlsx' | 'csv',         /**
         * (Optional) Unit
         * @see pro-api.esys_unit.html
         */
        unit: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;
        /**
         * (BETA) Obtain test point report files
         * @see pro-api.pcb_manufacturedata.gettestpointfile.html
         */
    /**
     * Test point report file data
     * You can export files to the local file system using the SYS_FileSystem.saveFile() interface
     */
        getTestPointFile(        /** (Optional) File name */
        fileName: string,         /** (Optional) File Type */
        fileType: 'xlsx' | 'csv'): Promise<File | undefined>;
        /**
         * (BETA) 3D shell order
         * @see pro-api.pcb_manufacturedata.place3dshellorder.html
         */
    /** Passed the order check */
        place3DShellOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
        /**
         * (BETA) Component Order
         * @see pro-api.pcb_manufacturedata.placecomponentsorder.html
         */
    /** Passed the order check */
        placeComponentsOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
        /**
         * (BETA) PCB Order
         * @see pro-api.pcb_manufacturedata.placepcborder.html
         */
    /** Passed the order check */
        placePcbOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
        /**
         * (BETA) SMT component order
         * @see pro-api.pcb_manufacturedata.placesmtcomponentsorder.html
         */
    /** Passed the order check */
        placeSmtComponentsOrder(        /** (Optional) Whether to enable interactive checking If enabled, there will be pop-up windows waiting for the user to interact, and the ignoreWarning parameter cannot be used to ignore the warning, that is, the ignoreWarning parameter will be ignored; if disabled, there will be no internal EDA pop-up window after the call, and the program will perform a silent check. If the order condition is reached, true will be returned and the order page will be opened on the new tab. */
        interactive: boolean,         /** (Optional) Ignore warnings during non-interactive inspections If set to true, all check warning items will be ignored and order information will be generated as much as possible; if set to false, any warning will interrupt execution and return the result of false */
        ignoreWarning: boolean): Promise<boolean>;
        /**
         * (BETA) Upload BOM template files
         * @see pro-api.pcb_manufacturedata.uploadbomtemplatefile.html
         */
    /** BOM template name */
        uploadBomTemplateFile(        /** BOM template file */
        templateFile: File,         /** (Optional) BOM template name, if undefined, it will automatically take the value from the templateFile */
        template: string): Promise<string | undefined>;
    }
    /**
     * PCB & Footprint / Polygon Math Class
     * @see ./pro-api.pcb_mathpolygon.html
     */
    /** Signature: export declare class PCB_MathPolygon */
    class PCB_MathPolygon {
        calculateBBoxHeight(        complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
        calculateBBoxWidth(        complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;
        /**
         * (BETA) Convert an image to a complex polygon object
         * @see pro-api.pcb_mathpolygon.convertimagetocomplexpolygon.html
         */
    /** Complex polygonal objects */
        convertImageToComplexPolygon(        /**
         * Image Blob file, you can use the SYS_FileSystem.openReadFileDialog() method to read files from the file system
         * @see pro-api.sys_filesystem.openreadfiledialog.html
         */
        imageBlob: Blob,         /** Image Width */
        imageWidth: number,         /** Image height */
        imageHeight: number,         /** (Optional) Tolerance, value range 0-1 */
        tolerance: number,         /** (Optional) Simplified, value range 0-1 */
        simplification: number,         /** (Optional) Smooth, value range 0-1.33 */
        smoothing: number,         /** (Optional) Despot, value range 0-5 */
        despeckling: number,         /** (Optional) Whether white is the background color */
        whiteAsBackgroundColor: boolean,         /** (Optional) Whether to reverse the phase */
        inversion: boolean): Promise<IPCB_ComplexPolygon | undefined>;
        /**
         * Create complex polygons
         * @see pro-api.pcb_mathpolygon.createcomplexpolygon.html
         */
    /** Complex polygon object, undefined means that the data is illegal */
        createComplexPolygon(        /**
         * Complex polygon data
         * @see pro-api.tpcb_polygonsourcearray.html
         */
        complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
        /**
         * Create a single polygon
         * @see pro-api.pcb_mathpolygon.createpolygon.html
         */
    /** Single-polygon object, undefined means that the data is illegal */
        createPolygon(        /**
         * Single polygon data
         * @see pro-api.tpcb_polygonsourcearray.html
         */
        polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
        /**
         * Split single polygon
         * @see pro-api.pcb_mathpolygon.splitpolygon.html
         */
    /** Single polygon array */
        splitPolygon(        /**
         * Complex polygons
         * @see pro-api.ipcb_complexpolygon.html
         */
        complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;
    }
    /**
     * PCB & Footprint / Net Class
     * @see ./pro-api.pcb_net.html
     */
    /** Signature: export declare class PCB_Net */
    class PCB_Net {
        /**
         * Get the network name of all networks
         * @see pro-api.pcb_net.getallnetname.html
         */
    /** Network name array */
        getAllNetName(): Promise<Array<string>>;
        /**
         * Get the network name of all networks
         * @see pro-api.pcb_net.getallnetsname.html
         */
    /** Network name array */
        getAllNetsName(): Promise<Array<string>>;
        /**
         * (BETA) Gets all elements associated with the specified network
         * @see pro-api.pcb_net.getallprimitivesbynet.html
         */
    /** Array of Element Objects */
        getAllPrimitivesByNet(        /** Network name */
        net: string,         /**
         * (Optional) Element type array. If the specified element type does not have network attributes, the returned data will always be empty
         * @see pro-api.epcb_primitivetype.html
         */
        primitiveTypes: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;
        /**
         * Get the length of the specified network
         * @see pro-api.pcb_net.getnetlength.html
         */
    /** Network length, undefined means that the network does not exist, 0 means that the network has no length */
        getNetLength(        /** Network name */
        net: string): Promise<number | undefined>;
        /**
         * Get the netlist
         * @see pro-api.pcb_net.getnetlist.html
         */
    /** Netlist data */
        getNetlist(        /**
         * (Optional) Netlist format
         * @see pro-api.esys_netlisttype.html
         */
        type: ESYS_NetlistType): Promise<string>;
        /**
         * (BETA) Highlight Network
         * @see pro-api.pcb_net.highlightnet.html
         */
    /**
     * Is the operation successful?
     * The return value of this interface is result-oriented. If the network has been highlighted, it will also return true
     */
        highlightNet(        /** Network name */
        net: string): Promise<boolean>;
        /**
         * (BETA) Select the network
         * @see pro-api.pcb_net.selectnet.html
         */
    /** Is the operation successful? */
        selectNet(        /** Network name */
        net: string): Promise<boolean>;
        /**
         * Update the netlist
         * @see pro-api.pcb_net.setnetlist.html
         */
        setNetlist(        /**
         * Netlist format
         * @see pro-api.esys_netlisttype.html
         */
        type: ESYS_NetlistType | undefined,         /** Netlist data */
        netlist: string): Promise<boolean>;
        /**
         * (BETA) Cancel the highlight network
         * @see pro-api.pcb_net.unhighlightnet.html
         */
    /**
     * Is the operation successful?
     * The return value of this interface is result-oriented. If the network is not originally highlighted, it will also return true
     */
        unhighlightNet(        /** Network name */
        net: string): Promise<boolean>;
    }
    /**
     * PCB & Footprint / Primitive Class
     * @see ./pro-api.pcb_primitive.html
     */
    /** Remark: Unified operation of elements */
    /** Signature: export declare class PCB_Primitive */
    class PCB_Primitive {
        /**
         * (BETA) Get the BBox of the primitive
         * @see pro-api.pcb_primitive.getprimitivesbbox.html
         */
    /** If the BBox of the element does not exist or does not have a BBox, the undefined result will be returned */
        getPrimitivesBBox(        /**
         * Essence ID array or element object array
         * @see pro-api.ipcb_primitive.html
         */
        primitiveIds: Array<string | IPCB_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number; } | undefined>;
    }
    /**
     * PCB & Footprint / Arc Line Primitive Class
     * @see ./pro-api.pcb_primitivearc.html
     */
    /** Remark: Lines and arcs are both conductors, corresponding to the line traces and arc traces of the canvas */
    /** Signature: export declare class PCB_PrimitiveArc implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveArc {
        /**
         * (BETA) Create an arc
         * @see pro-api.pcb_primitivearc.create.html
         */
    /** Arc primitive object */
        create(        /** Network name */
        net: string,         /**
         * layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** Start position X */
        startX: number,         /** Start position Y */
        startY: number,         /** Termination position X */
        endX: number,         /** Termination position Y */
        endY: number,         /** Arc angle */
        arcAngle: number,         /** (Optional) Line width */
        lineWidth: number,         /**
         * (Optional) Interactive Mode
         * @see pro-api.epcb_primitivearcinteractivemode.html
         */
        interactiveMode: EPCB_PrimitiveArcInteractiveMode,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveArc | undefined>;
        /**
         * (BETA) Delete arc lines
         * @see pro-api.pcb_primitivearc.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The primitive ID of an arc or an arc primitive object
         * @see pro-api.ipcb_primitivearc.html
         */
        primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;
        /**
         * (BETA) Get the arc line
         * @see pro-api.pcb_primitivearc.get.html
         */
    /** Arc primitive object, undefined means acquisition failed */
        get(        /** The primitive ID of the arc can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;
        /**
         * (BETA) Get the arc line
         * @see pro-api.pcb_primitivearc.get_1.html
         */
    /**
     * Arc primitive object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the arc can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;
        /**
         * (BETA) Get all arcs
         * @see pro-api.pcb_primitivearc.getall.html
         */
    /** Arc primitive object array */
        getAll(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveArc>>;
        /**
         * (BETA) Get the primitive ID of all arcs
         * @see pro-api.pcb_primitivearc.getallprimitiveid.html
         */
    /** Arc primitive ID array */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the arc
         * @see pro-api.pcb_primitivearc.modify.html
         */
    /** Arc primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivearc.html
         */
        primitiveId: string | IPCB_PrimitiveArc,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofline.html
         */
        property: { net?: string; layer?: TPCB_LayersOfLine; startX?: number; startY?: number; endX?: number; endY?: number; arcAngle?: number; lineWidth?: number; interactiveMode?: EPCB_PrimitiveArcInteractiveMode; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveArc | undefined>;
    }
    /**
     * PCB & Footprint / Component Primitive Class
     * @see ./pro-api.pcb_primitivecomponent.html
     */
    /** Signature: export declare class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveComponent {
        /**
         * (BETA) Create a device
         * @see pro-api.pcb_primitivecomponent.create.html
         */
    /** Device element object */
        create(        /**
         * Associated library devices
         * @see pro-api.ilib_deviceitem.html
         */
        component: { libraryUuid: string; uuid: string; } | ILIB_DeviceItem,         /**
         * layer
         * @see pro-api.tpcb_layersofcomponent.html
         */
        layer: TPCB_LayersOfComponent,         /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveComponent | undefined>;
        /**
         * (BETA) Remove device
         * @see pro-api.pcb_primitivecomponent.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Device primitive ID or device primitive object
         * @see pro-api.ipcb_primitivecomponent.html
         */
        primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;
        /**
         * (BETA) Obtaining Devices
         * @see pro-api.pcb_primitivecomponent.get.html
         */
    /** Device element object, undefined means acquisition failure */
        get(        /** The primitive ID of the device can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;
        /**
         * (BETA) Obtaining Devices
         * @see pro-api.pcb_primitivecomponent.get_1.html
         */
    /**
     * Device element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the device can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;
        /**
         * (BETA) Get all devices
         * @see pro-api.pcb_primitivecomponent.getall.html
         */
    /** Device element object array */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofcomponent.html
         */
        layer: TPCB_LayersOfComponent,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveComponent>>;
        /**
         * (BETA) Gets all the pads associated with the device
         * @see pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.html
         */
    /** Device pad element array */
        getAllPinsByPrimitiveId(        /** Device Entity ID */
        primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;
        /**
         * (BETA) Get the primitive IDs of all devices
         * @see pro-api.pcb_primitivecomponent.getallprimitiveid.html
         */
    /** Device primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofcomponent.html
         */
        layer: TPCB_LayersOfComponent,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the device
         * @see pro-api.pcb_primitivecomponent.modify.html
         */
    /** Device element object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivecomponent.html
         */
        primitiveId: string | IPCB_PrimitiveComponent,         property: { layer?: TPCB_LayersOfComponent; x?: number; y?: number; rotation?: number; primitiveLock?: boolean; addIntoBom?: boolean; designator?: string | null; name?: string | null; uniqueId?: string | null; manufacturer?: string | null; manufacturerId?: string | null; supplier?: string | null; supplierId?: string | null; otherProperty?: { [key: string]: any; }; }): Promise<IPCB_PrimitiveComponent | undefined>;
    }
    /**
     * PCB & Footprint / Dimension Primitive Class
     * @see ./pro-api.pcb_primitivedimension.html
     */
    /** Signature: export declare class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveDimension {
        /**
         * Create dimensions
         * @see pro-api.pcb_primitivedimension.create.html
         */
    /** Dimensional primitive object */
        create(        /**
         * Dimension type
         * @see pro-api.epcb_primitivedimensiontype.html
         */
        dimensionType: EPCB_PrimitiveDimensionType,         /**
         * Dimensional coordinate set
         * @see pro-api.tpcb_primitivedimensioncoordinateset.html
         */
        coordinateSet: TPCB_PrimitiveDimensionCoordinateSet,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofdimension.html
         */
        layer: TPCB_LayersOfDimension,         /**
         * (Optional) Unit
         * @see pro-api.esys_unit.html
         */
        unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Accuracy, value range 0-4 */
        precision: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveDimension | undefined>;
        /**
         * (BETA) Delete dimensions
         * @see pro-api.pcb_primitivedimension.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Dimensional primitive ID or Dimensional primitive object
         * @see pro-api.ipcb_primitivedimension.html
         */
        primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>;
        /**
         * (BETA) Get dimensions
         * @see pro-api.pcb_primitivedimension.get.html
         */
    /** Dimension element object, undefined means acquisition failed */
        get(        /** The primitive ID of the dimensions can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>;
        /**
         * (BETA) Get dimensions
         * @see pro-api.pcb_primitivedimension.get_1.html
         */
    /**
     * Dimension element object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the dimensions can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>;
        /**
         * (BETA) Get all dimensions
         * @see pro-api.pcb_primitivedimension.getall.html
         */
    /** Dimensional element object array */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofdimension.html
         */
        layer: TPCB_LayersOfDimension,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveDimension>>;
        /**
         * (BETA) Get all dimensioned primitive IDs
         * @see pro-api.pcb_primitivedimension.getallprimitiveid.html
         */
    /** Dimensional primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofdimension.html
         */
        layer: TPCB_LayersOfDimension,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify dimensions
         * @see pro-api.pcb_primitivedimension.modify.html
         */
    /** Dimensional primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivedimension.html
         */
        primitiveId: string | IPCB_PrimitiveDimension,         /**
         * Modify parameters
         * @see pro-api.epcb_primitivedimensiontype.html
         */
        property: { dimensionType?: EPCB_PrimitiveDimensionType; coordinateSet?: TPCB_PrimitiveDimensionCoordinateSet; layer?: TPCB_LayersOfDimension; unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; lineWidth?: number; precision?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveDimension | undefined>;
    }
    /**
     * PCB & Footprint / Fill Primitive Class
     * @see ./pro-api.pcb_primitivefill.html
     */
    /** Signature: export declare class PCB_PrimitiveFill implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveFill {
        /**
         * (BETA) Create fill
         * @see pro-api.pcb_primitivefill.create.html
         */
    /** Fill in element objects */
        create(        /**
         * layer
         * @see pro-api.tpcb_layersoffill.html
         */
        layer: TPCB_LayersOfFill,         /**
         * Complex polygonal objects
         * @see pro-api.ipcb_polygon.html
         */
        complexPolygon: IPCB_Polygon,         /** (Optional) Network name */
        net: string,         /**
         * (Optional) Fill mode
         * @see pro-api.epcb_primitivefillmode.html
         */
        fillMode: EPCB_PrimitiveFillMode,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveFill | undefined>;
        /**
         * (BETA) Delete the padding
         * @see pro-api.pcb_primitivefill.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Filled primitive ID or fill primitive object
         * @see pro-api.ipcb_primitivefill.html
         */
        primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;
        /**
         * (BETA) Get Fill
         * @see pro-api.pcb_primitivefill.get.html
         */
    /** Fill in the element object, undefined means the acquisition failed */
        get(        /** The filled primitive ID can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;
        /**
         * (BETA) Get Fill
         * @see pro-api.pcb_primitivefill.get_1.html
         */
    /**
     * Fill in element object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The filled primitive ID can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;
        /**
         * (BETA) Get all fills
         * @see pro-api.pcb_primitivefill.getall.html
         */
    /** Filling an array of primitive objects */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersoffill.html
         */
        layer: TPCB_LayersOfFill,         /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveFill>>;
        /**
         * (BETA) Get all filled primitive IDs
         * @see pro-api.pcb_primitivefill.getallprimitiveid.html
         */
    /** Filled primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersoffill.html
         */
        layer: TPCB_LayersOfFill,         /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify fill
         * @see pro-api.pcb_primitivefill.modify.html
         */
    /** Fill in the element object, undefined means modification failed */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivefill.html
         */
        primitiveId: string | IPCB_PrimitiveFill,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersoffill.html
         */
        property: { layer?: TPCB_LayersOfFill; complexPolygon?: IPCB_Polygon; net?: string; fillMode?: EPCB_PrimitiveFillMode; lineWidth?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveFill | undefined>;
    }
    /**
     * PCB & Footprint / Image Primitive Class
     * @see ./pro-api.pcb_primitiveimage.html
     */
    /** Signature: export declare class PCB_PrimitiveImage implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveImage {
        /**
         * Create an image
         * @see pro-api.pcb_primitiveimage.create.html
         */
    /**
     * Image element object
     * To create a color silkscreen image, use the binary embedded object element class
     */
        create(        /** BBox upper left point coordinate X */
        x: number,         /** BBox upper left point coordinate Y */
        y: number,         /**
         * Image source data (complex polygon), you can use the PCB_MathPolygon.convertImageToComplexPolygon() method to convert image files into complex polygon data
         * @see pro-api.pcb_mathpolygon.convertimagetocomplexpolygon.html
         */
        complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon,         /**
         * layer
         * @see pro-api.tpcb_layersofimage.html
         */
        layer: TPCB_LayersOfImage,         /** (Optional) wide */
        width: number,         /** (Optional) High */
        height: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror horizontally */
        horizonMirror: boolean,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveImage | undefined>;
        /**
         * (BETA) Delete images
         * @see pro-api.pcb_primitiveimage.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The image's primitive ID or image's primitive object
         * @see pro-api.ipcb_primitiveimage.html
         */
        primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;
        /**
         * (BETA) Get Images
         * @see pro-api.pcb_primitiveimage.get.html
         */
    /** Image element object, undefined means acquisition failed */
        get(        /** The primitive ID of the image can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;
        /**
         * (BETA) Get Images
         * @see pro-api.pcb_primitiveimage.get_1.html
         */
    /**
     * Image element object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the image can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;
        /**
         * (BETA) Get all images
         * @see pro-api.pcb_primitiveimage.getall.html
         */
    /** Image element object array */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofimage.html
         */
        layer: TPCB_LayersOfImage,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveImage>>;
        /**
         * (BETA) Get the primitive ID of all images
         * @see pro-api.pcb_primitiveimage.getallprimitiveid.html
         */
    /** Image primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofimage.html
         */
        layer: TPCB_LayersOfImage,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify images
         * @see pro-api.pcb_primitiveimage.modify.html
         */
    /** Image element object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitiveimage.html
         */
        primitiveId: string | IPCB_PrimitiveImage,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofimage.html
         */
        property: { x?: number; y?: number; layer?: TPCB_LayersOfImage; width?: number; height?: number; rotation?: number; horizonMirror?: boolean; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveImage | undefined>;
    }
    /**
     * PCB & Footprint / Line Primitive Class
     * @see ./pro-api.pcb_primitiveline.html
     */
    /** Remark: Lines and arcs are both conductors, corresponding to the line traces and arc traces of the canvas */
    /** Signature: export declare class PCB_PrimitiveLine implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveLine {
        /**
         * Create a straight line
         * @see pro-api.pcb_primitiveline.create.html
         */
    /** Linear element object */
        create(        /** Network name */
        net: string,         /**
         * layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** Start position X */
        startX: number,         /** Start position Y */
        startY: number,         /** Termination position X */
        endX: number,         /** Termination position Y */
        endY: number,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveLine | undefined>;
        /**
         * (BETA) Delete a straight line
         * @see pro-api.pcb_primitiveline.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Line's primitive ID or line's primitive object
         * @see pro-api.ipcb_primitiveline.html
         */
        primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;
        /**
         * (BETA) Get a straight line
         * @see pro-api.pcb_primitiveline.get.html
         */
    /** Linear element object, undefined means acquisition failed */
        get(        /** The primitive ID of a straight line can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;
        /**
         * (BETA) Get a straight line
         * @see pro-api.pcb_primitiveline.get_1.html
         */
    /**
     * Linear element object, empty array indicates failure to obtain
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of a straight line can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;
        /**
         * (BETA) Get all lines
         * @see pro-api.pcb_primitiveline.getall.html
         */
    /** Array of linear element objects */
        getAll(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveLine>>;
        /**
         * (BETA) Get the primitive ID of all lines
         * @see pro-api.pcb_primitiveline.getallprimitiveid.html
         */
    /** The primitive ID array of polylines */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the line
         * @see pro-api.pcb_primitiveline.modify.html
         */
    /** Linear element object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitiveline.html
         */
        primitiveId: string | IPCB_PrimitiveLine,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofline.html
         */
        property: { net?: string; layer?: TPCB_LayersOfLine; startX?: number; startY?: number; endX?: number; endY?: number; lineWidth?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveLine | undefined>;
    }
    /**
     * PCB & Footprint / Binary Embedded Object Primitive Class
     * @see ./pro-api.pcb_primitiveobject.html
     */
    /** Remark: Colored silk screen images belong to binary embedded objects and need to be created and modified using the binary embedded objects method. */
    /** Signature: export declare class PCB_PrimitiveObject implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveObject {
        /**
         * (BETA) Create binary embedded objects
         * @see pro-api.pcb_primitiveobject.create.html
         */
        create(        /**
         * layer
         * @see pro-api.tpcb_layersofobject.html
         */
        layer: TPCB_LayersOfObject,         /** Top left point X */
        topLeftX: number,         /** Top left point Y */
        topLeftY: number,         /** Binary data */
        binaryData: string,         /** Width */
        width: number,         /** high */
        height: number,         /** (Optional) Rotation angle */
        rotation: number,         /** (Optional) Whether to mirror horizontally */
        mirror: boolean,         /** (Optional) File name */
        fileName: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveObject | undefined>;
        /**
         * (BETA) Delete binary embedded objects
         * @see pro-api.pcb_primitiveobject.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The primitive ID of a binary embedded object or the primitive object of a binary embedded object
         * @see pro-api.ipcb_primitiveobject.html
         */
        primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;
        /**
         * (BETA) Get binary embedded objects
         * @see pro-api.pcb_primitiveobject.get.html
         */
    /** Binary embedded object element object, undefined means acquisition failure */
        get(        /** The primitive ID of the binary embedded object can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;
        /**
         * (BETA) Get binary embedded objects
         * @see pro-api.pcb_primitiveobject.get_1.html
         */
    /**
     * Binary embedded object element object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the binary embedded object can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;
        /**
         * (BETA) Gets all binary embedded objects
         * @see pro-api.pcb_primitiveobject.getall.html
         */
    /** Binary embedded object element object array */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofobject.html
         */
        layer: TPCB_LayersOfObject,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveObject>>;
        /**
         * (BETA) Get the primitive ID of all binary embedded objects
         * @see pro-api.pcb_primitiveobject.getallprimitiveid.html
         */
    /** Element ID array of binary embedded objects */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofobject.html
         */
        layer: TPCB_LayersOfObject,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify binary embedded objects
         * @see pro-api.pcb_primitiveobject.modify.html
         */
    /** Binary embedded object element object, undefined means modification failed */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitiveobject.html
         */
        primitiveId: string | IPCB_PrimitiveObject,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofobject.html
         */
        property: { layer?: TPCB_LayersOfObject; topLeftX?: number; topLeftY?: number; binaryData?: string; width?: number; height?: number; rotation?: number; mirror?: boolean; fileName?: string; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveObject | undefined>;
    }
    /**
     * PCB & Footprint / Pad Primitive Class
     * @see ./pro-api.pcb_primitivepad.html
     */
    /** Signature: export declare class PCB_PrimitivePad implements IPCB_PrimitiveAPI */
    class PCB_PrimitivePad {
        /**
         * Create a solder pad
         * @see pro-api.pcb_primitivepad.create.html
         */
    /** Pad element object */
        create(        /**
         * layer
         * @see pro-api.tpcb_layersofpad.html
         */
        layer: TPCB_LayersOfPad,         /** Pad number */
        padNumber: string,         /** Position X */
        x: number,         /** Location Y */
        y: number,         /** (Optional) Rotation angle */
        rotation: number,         /**
         * (Optional) pad shape
         * @see pro-api.tpcb_primitivepadshape.html
         */
        pad: TPCB_PrimitivePadShape,         /** (Optional) Network name */
        net: string,         /**
         * (Optional) Hole, null mark no hole
         * @see pro-api.tpcb_primitivepadhole.html
         */
        hole: TPCB_PrimitivePadHole | null,         /** (Optional) Hole Offset X */
        holeOffsetX: number,         /** (Optional) Hole Offset Y */
        holeOffsetY: number,         /** (Optional) The rotation angle of the hole relative to the pad */
        holeRotation: number,         /** (Optional) Whether to metalize the pore walls */
        metallization: boolean,         /**
         * (Optional) pad type
         * @see pro-api.epcb_primitivepadtype.html
         */
        padType: EPCB_PrimitivePadType,         /**
         * (Optional) Special pad shape
         * @see pro-api.tpcb_primitivespecialpadshape.html
         */
        specialPad: TPCB_PrimitiveSpecialPadShape,         /**
         * (Optional) Solder-protected/solder extension, null means following the rules
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.html
         */
        solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null,         /** (Optional) Thermal welding optimization parameters */
        heatWelding: IPCB_PrimitivePadHeatWelding | null,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitivePad | undefined>;
        /**
         * (BETA) Delete the pad
         * @see pro-api.pcb_primitivepad.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The pad's primitive ID or pad's primitive object
         * @see pro-api.ipcb_primitivepad.html
         */
        primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>;
        /**
         * (BETA) Get the pad
         * @see pro-api.pcb_primitivepad.get.html
         */
    /** The pad element object, undefined means the acquisition failed */
        get(        /** The primitive ID of the pad can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>;
        /**
         * (BETA) Get the pad
         * @see pro-api.pcb_primitivepad.get_1.html
         */
    /**
     * Pad element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the pad can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>;
        /**
         * (BETA) Get all pads
         * @see pro-api.pcb_primitivepad.getall.html
         */
    /** Array of pad primitive object */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofpad.html
         */
        layer: TPCB_LayersOfPad,         /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean,         /**
         * (Optional)
         * @see pro-api.epcb_primitivepadtype.html
         */
        padType: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>;
        /**
         * (BETA) Get the primitive ID of all pads
         * @see pro-api.pcb_primitivepad.getallprimitiveid.html
         */
    /** The element ID array of pads */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofpad.html
         */
        layer: TPCB_LayersOfPad,         /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean,         /**
         * (Optional)
         * @see pro-api.epcb_primitivepadtype.html
         */
        padType: EPCB_PrimitivePadType): Promise<Array<string>>;
        /**
         * (BETA) Modify the pad
         * @see pro-api.pcb_primitivepad.modify.html
         */
    /** Pad element object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivepad.html
         */
        primitiveId: string | IPCB_PrimitivePad,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofpad.html
         */
        property: { layer?: TPCB_LayersOfPad; padNumber?: string; x?: number; y?: number; rotation?: number; pad?: TPCB_PrimitivePadShape; net?: string; hole?: TPCB_PrimitivePadHole | null; holeOffsetX?: number; holeOffsetY?: number; holeRotation?: number; metallization?: boolean; specialPad?: TPCB_PrimitiveSpecialPadShape; solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null; heatWelding?: IPCB_PrimitivePadHeatWelding | null; primitiveLock?: boolean; }): Promise<IPCB_PrimitivePad | undefined>;
    }
    /**
     * PCB & Footprint / Polyline Primitive Class
     * @see ./pro-api.pcb_primitivepolyline.html
     */
    /** Signature: export declare class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI */
    class PCB_PrimitivePolyline {
        /**
         * Create a polyline
         * @see pro-api.pcb_primitivepolyline.create.html
         */
    /** Line primitive object */
        create(        /** Network name */
        net: string,         /**
         * layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /**
         * Single-polygon object
         * @see pro-api.ipcb_polygon.html
         */
        polygon: IPCB_Polygon,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitivePolyline | undefined>;
        /**
         * (BETA) Delete the fold line
         * @see pro-api.pcb_primitivepolyline.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The primitive ID of a polyline or a polyline primitive object
         * @see pro-api.ipcb_primitivepolyline.html
         */
        primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;
        /**
         * (BETA) Get the fold line
         * @see pro-api.pcb_primitivepolyline.get.html
         */
    /** Line element object, undefined means acquisition failed */
        get(        /** The primitive ID of the polyline can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;
        /**
         * (BETA) Get the fold line
         * @see pro-api.pcb_primitivepolyline.get_1.html
         */
    /**
     * Line element object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the polyline can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;
        /**
         * (BETA) Get all folds
         * @see pro-api.pcb_primitivepolyline.getall.html
         */
    /** Linear primitive object array */
        getAll(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitivePolyline>>;
        /**
         * (BETA) Get the primitive ID of all polylines
         * @see pro-api.pcb_primitivepolyline.getallprimitiveid.html
         */
    /** The primitive ID array of polylines */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofline.html
         */
        layer: TPCB_LayersOfLine,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the fold line
         * @see pro-api.pcb_primitivepolyline.modify.html
         */
    /** Line primitive object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivepolyline.html
         */
        primitiveId: string | IPCB_PrimitivePolyline,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofline.html
         */
        property: { net?: string; layer?: TPCB_LayersOfLine; polygon?: IPCB_Polygon; lineWidth?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitivePolyline | undefined>;
    }
    /**
     * PCB & Footprint / Copper Pour Border Primitive Class
     * @see ./pro-api.pcb_primitivepour.html
     */
    /** Signature: export declare class PCB_PrimitivePour implements IPCB_PrimitiveAPI */
    class PCB_PrimitivePour {
        /**
         * (BETA) Create a copper clad border
         * @see pro-api.pcb_primitivepour.create.html
         */
    /** Copper border element object */
        create(        /** Network name */
        net: string,         /**
         * layer
         * @see pro-api.tpcb_layersofcopper.html
         */
        layer: TPCB_LayersOfCopper,         /**
         * Complex polygonal objects
         * @see pro-api.ipcb_polygon.html
         */
        complexPolygon: IPCB_Polygon,         /**
         * (Optional) Copper clad filling method
         * @see pro-api.epcb_primitivepourfillmethod.html
         */
        pourFillMethod: EPCB_PrimitivePourFillMethod,         /** (Optional) Whether to keep an island */
        preserveSilos: boolean,         /** (Optional) Copper clad name */
        pourName: string,         /** (Optional) Copper clad priority */
        pourPriority: number,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitivePour | undefined>;
        /**
         * (BETA) Remove the copper clad border
         * @see pro-api.pcb_primitivepour.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The primitive ID of the copper-clad border or the primitive object of the copper-clad border
         * @see pro-api.ipcb_primitivepour.html
         */
        primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;
        /**
         * (BETA) Get Copper-clad Border
         * @see pro-api.pcb_primitivepour.get.html
         */
    /** Copper-clad border element object, undefined means acquisition failed */
        get(        /** The primitive ID of the copper-clad border can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;
        /**
         * (BETA) Get Copper-clad Border
         * @see pro-api.pcb_primitivepour.get_1.html
         */
    /**
     * Copper-clad border element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the copper-clad border can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;
        /**
         * (BETA) Get all copper-clad border elements
         * @see pro-api.pcb_primitivepour.getall.html
         */
    /** Copper border element object array */
        getAll(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofcopper.html
         */
        layer: TPCB_LayersOfCopper,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitivePour>>;
        /**
         * (BETA) Get the primitive IDs of all copper-clad borders
         * @see pro-api.pcb_primitivepour.getallprimitiveid.html
         */
    /** Element ID array of copper-clad borders */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string,         /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofcopper.html
         */
        layer: TPCB_LayersOfCopper,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the copper clad border
         * @see pro-api.pcb_primitivepour.modify.html
         */
    /** Copper-clad border element object, undefined means modification failed */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivepour.html
         */
        primitiveId: string | IPCB_PrimitivePour,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofcopper.html
         */
        property: { net?: string; layer?: TPCB_LayersOfCopper; complexPolygon?: IPCB_Polygon; pourFillMethod?: EPCB_PrimitivePourFillMethod; preserveSilos?: boolean; pourName?: string; pourPriority?: number; lineWidth?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitivePour | undefined>;
    }
    /**
     * PCB & Footprint / Keepout and Constraint Region Primitive Class
     * @see ./pro-api.pcb_primitiveregion.html
     */
    /** Signature: export declare class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveRegion {
        /**
         * (BETA) Create a region
         * @see pro-api.pcb_primitiveregion.create.html
         */
    /** Area primitive object */
        create(        /**
         * layer
         * @see pro-api.tpcb_layersofregion.html
         */
        layer: TPCB_LayersOfRegion,         /**
         * Complex polygonal objects
         * @see pro-api.ipcb_polygon.html
         */
        complexPolygon: IPCB_Polygon,         /**
         * (Optional) Regional Rule Type
         * @see pro-api.epcb_primitiveregionruletype.html
         */
        ruleType: Array<EPCB_PrimitiveRegionRuleType>,         /** (Optional) Region name */
        regionName: string,         /** (Optional) Line width */
        lineWidth: number,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveRegion | undefined>;
        /**
         * (BETA) Delete the area
         * @see pro-api.pcb_primitiveregion.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * Area primitive ID or area primitive object
         * @see pro-api.ipcb_primitiveregion.html
         */
        primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;
        /**
         * (BETA) Get Area
         * @see pro-api.pcb_primitiveregion.get.html
         */
    /** Area element object, undefined means acquisition failed */
        get(        /** The primitive ID of the area can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;
        /**
         * (BETA) Get Area
         * @see pro-api.pcb_primitiveregion.get_1.html
         */
    /**
     * Area element object, empty array indicates failed acquisition
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The primitive ID of the area can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;
        /**
         * (BETA) Get all regions
         * @see pro-api.pcb_primitiveregion.getall.html
         */
    /** Regional element object array */
        getAll(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofregion.html
         */
        layer: TPCB_LayersOfRegion,         /**
         * (Optional) Regional rule type, which only matches primitives with consistent rule types
         * @see pro-api.epcb_primitiveregionruletype.html
         */
        ruleType: Array<EPCB_PrimitiveRegionRuleType>,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveRegion>>;
        /**
         * (BETA) Get the element ID of all regions
         * @see pro-api.pcb_primitiveregion.getallprimitiveid.html
         */
    /** Area primitive ID array */
        getAllPrimitiveId(        /**
         * (Optional) layer
         * @see pro-api.tpcb_layersofregion.html
         */
        layer: TPCB_LayersOfRegion,         /**
         * (Optional) Regional rule type, which only matches primitives with consistent rule types
         * @see pro-api.epcb_primitiveregionruletype.html
         */
        ruleType: Array<EPCB_PrimitiveRegionRuleType>,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify the area
         * @see pro-api.pcb_primitiveregion.modify.html
         */
    /** Area element object, undefined means modification failed */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitiveregion.html
         */
        primitiveId: string | IPCB_PrimitiveRegion,         /**
         * Modify parameters
         * @see pro-api.tpcb_layersofregion.html
         */
        property: { layer?: TPCB_LayersOfRegion; complexPolygon?: IPCB_Polygon; ruleType?: Array<EPCB_PrimitiveRegionRuleType>; regionName?: string; lineWidth?: number; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveRegion | undefined>;
    }
    /**
     * PCB & Footprint / Via Primitive Class
     * @see ./pro-api.pcb_primitivevia.html
     */
    /** Signature: export declare class PCB_PrimitiveVia implements IPCB_PrimitiveAPI */
    class PCB_PrimitiveVia {
        /**
         * Create vias
         * @see pro-api.pcb_primitivevia.create.html
         */
    /** Through hole element object */
        create(        /** Network name */
        net: string,         /** Coordinate X */
        x: number,         /** Coordinate Y */
        y: number,         /** Ore diameter */
        holeDiameter: number,         /** Outer path */
        diameter: number,         /**
         * (Optional) via type
         * @see pro-api.epcb_primitiveviatype.html
         */
        viaType: EPCB_PrimitiveViaType,         /** (Optional) Blind buried hole design rule item name, defining the start and end layers of the via hole, null means non-blind buried hole */
        designRuleBlindViaName: string | null,         /**
         * (Optional) Solder-protected/solder extension, null means following rules
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.html
         */
        solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<IPCB_PrimitiveVia | undefined>;
        /**
         * (BETA) Delete vias
         * @see pro-api.pcb_primitivevia.delete.html
         */
    /** Is the deletion operation successful? */
        delete(        /**
         * The element ID of the via hole or the element object of the via hole
         * @see pro-api.ipcb_primitivevia.html
         */
        primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;
        /**
         * (BETA) Get via holes
         * @see pro-api.pcb_primitivevia.get.html
         */
    /** Through hole element object, undefined means acquisition failed */
        get(        /** The element ID of the via hole can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;
        /**
         * (BETA) Get via holes
         * @see pro-api.pcb_primitivevia.get_1.html
         */
    /**
     * Passage element object, empty array indicates acquisition failure
     * If multiple element IDs are passed in, any element ID does not match and does not affect the return of other elements, it may return less than the number of element IDs passed in.
     */
        get(        /** The element ID of the via hole can be a string or a string array. If it is an array, the returned array is also an array. */
        primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;
        /**
         * (BETA) Get all vias
         * @see pro-api.pcb_primitivevia.getall.html
         */
    /** Array of via primitive objects */
        getAll(        /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<IPCB_PrimitiveVia>>;
        /**
         * (BETA) Get all vias IDs
         * @see pro-api.pcb_primitivevia.getallprimitiveid.html
         */
    /** Element ID array of via holes */
        getAllPrimitiveId(        /** (Optional) Network name */
        net: string,         /** (Optional) Whether to lock */
        primitiveLock: boolean): Promise<Array<string>>;
        /**
         * (BETA) Modify vias
         * @see pro-api.pcb_primitivevia.modify.html
         */
    /** Through hole element object */
        modify(        /**
         * Essence ID
         * @see pro-api.ipcb_primitivevia.html
         */
        primitiveId: string | IPCB_PrimitiveVia,         /**
         * Modify parameters
         * @see pro-api.epcb_primitiveviatype.html
         */
        property: { net?: string; x?: number; y?: number; holeDiameter?: number; diameter?: number; viaType?: EPCB_PrimitiveViaType; designRuleBlindViaName?: string | null; solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null; primitiveLock?: boolean; }): Promise<IPCB_PrimitiveVia | undefined>;
    }
    /**
     * PCB & Footprint / Selection Control Class
     * @see ./pro-api.pcb_selectcontrol.html
     */
    /** Remark: Get or manipulate selected elements */
    /** Signature: export declare class PCB_SelectControl */
    class PCB_SelectControl {
        /**
         * (BETA) Clear Selected
         * @see pro-api.pcb_selectcontrol.clearselected.html
         */
    /** Is the operation successful? */
        clearSelected(): Promise<boolean>;
        /**
         * (BETA) Cross-select
         * @see pro-api.pcb_selectcontrol.docrossprobeselect.html
         */
        doCrossProbeSelect(        /** (Optional) Device bit number */
        components: Array<string>,         /** (Optional) Device bit number_pin number, format ['U1_1', 'U1_2'] */
        pins: Array<string>,         /** (Optional) Network name */
        nets: Array<string>,         /** (Optional) Is it highlighted */
        highlight: boolean,         /** (Optional) Whether the operation is successful */
        select: boolean): Promise<boolean>;
        /**
         * (BETA) Select the primitive using the primitive ID
         * @see pro-api.pcb_selectcontrol.doselectprimitives.html
         */
    /** Is the operation successful? */
        doSelectPrimitives(        /** Essence ID */
        primitiveIds: string | Array<string>): Promise<boolean>;
        /**
         * (BETA) Query all selected entries IDs
         * @see pro-api.pcb_selectcontrol.getallselectedprimitives_primitiveid.html
         */
    /** All selected primitive IDs */
        getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
        /**
         * (BETA) Query all selected primitive objects
         * @see pro-api.pcb_selectcontrol.getallselectedprimitives.html
         */
    /** All selected primitive objects */
        getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;
        /**
         * (BETA) Gets the current position of the mouse on the canvas
         * @see pro-api.pcb_selectcontrol.getcurrentmouseposition.html
         */
    /** The position of the mouse on the canvas, undefined means that the current mouse is not on the canvas */
        getCurrentMousePosition(): Promise<{ x: number; y: number; } | undefined>;
        /**
         * (BETA) Query all parameters of selected primitives
         * @see pro-api.pcb_selectcontrol.getselectedprimitives.html
         */
    /** Select all parameters of the primitive */
        getSelectedPrimitives(): Promise<Array<Object>>;
    }
    /**
     * Differential Pair Properties
     * @see ./pro-api.ipcb_differentialpairitem.html
     */
    /** Signature: export interface IPCB_DifferentialPairItem */
    interface IPCB_DifferentialPairItem {
        /**
         * Differential pair name
         * @see pro-api.ipcb_differentialpairitem.name.html
         */
        name: string;
        /**
         * Negative network
         * @see pro-api.ipcb_differentialpairitem.negativenet.html
         */
        negativeNet: string;
        /**
         * The Internet
         * @see pro-api.ipcb_differentialpairitem.positivenet.html
         */
        positiveNet: string;
    }
    /**
     * Equal Length Net Group Properties
     * @see ./pro-api.ipcb_equallengthnetgroupitem.html
     */
    /** Signature: export interface IPCB_EqualLengthNetGroupItem */
    interface IPCB_EqualLengthNetGroupItem {
        /**
         * Isometric network group color
         * @see pro-api.ipcb_equallengthnetgroupitem.color.html
         */
        color: { r: number; g: number; b: number; alpha: number; } | null;
        /**
         * Isometric network group name
         * @see pro-api.ipcb_equallengthnetgroupitem.name.html
         */
        name: string;
        /**
         * Network name array
         * @see pro-api.ipcb_equallengthnetgroupitem.nets.html
         */
        nets: Array<string>;
    }
    /**
     * Net Class Properties
     * @see ./pro-api.ipcb_netclassitem.html
     */
    /** Signature: export interface IPCB_NetClassItem */
    interface IPCB_NetClassItem {
        /**
         * Network color
         * @see pro-api.ipcb_netclassitem.color.html
         */
        color: { r: number; g: number; b: number; alpha: number; } | null;
        /**
         * Network class name
         * @see pro-api.ipcb_netclassitem.name.html
         */
        name: string;
        /**
         * Network name array
         * @see pro-api.ipcb_netclassitem.nets.html
         */
        nets: Array<string>;
    }
    /**
     * Pad Pair Group Properties
     * @see ./pro-api.ipcb_padpairgroupitem.html
     */
    /** Signature: export interface IPCB_PadPairGroupItem */
    interface IPCB_PadPairGroupItem {
        /**
         * Pad pair group name
         * @see pro-api.ipcb_padpairgroupitem.name.html
         */
        name: string;
        /**
         * Pad p-array
         * @see pro-api.ipcb_padpairgroupitem.padpairs.html
         */
        padPairs: Array<[string, string]>;
    }
    /**
     * Pad Pair Minimum Wire Length Properties
     * @see ./pro-api.ipcb_padpairminwirelengthitem.html
     */
    /** Signature: export interface IPCB_PadPairMinWireLengthItem */
    interface IPCB_PadPairMinWireLengthItem {
        /**
         * Minimum wire length
         * @see pro-api.ipcb_padpairminwirelengthitem.minwirelength.html
         */
        minWireLength: number;
        /**
         * Pad p-array
         * @see pro-api.ipcb_padpairminwirelengthitem.padpair.html
         */
        padPair: [string, string];
    }
    /**
     * Layer Properties
     * @see ./pro-api.ipcb_layeritem.html
     */
    /** Signature: export interface IPCB_LayerItem */
    interface IPCB_LayerItem {
        /**
         * Color (RGB HEX format)
         * @see pro-api.ipcb_layeritem.color.html
         */
        color: string;
        /**
         * Layer ID
         * @see pro-api.epcb_layerid.html
         */
        id: EPCB_LayerId;
        /**
         * name
         * @see pro-api.ipcb_layeritem.name.html
         */
        name: string;
        /**
         * transparency(%)
         * @see pro-api.ipcb_layeritem.transparency.html
         */
        transparency: number;
        /**
         * type
         * @see pro-api.epcb_layertype.html
         */
        type: EPCB_LayerType;
    }
    /**
     * Net Properties
     * @see ./pro-api.ipcb_netinfo.html
     */
    /** Signature: export interface IPCB_NetInfo */
    interface IPCB_NetInfo {
        /**
         * color
         * @see pro-api.ipcb_netinfo.color.html
         */
        color: { r: number; g: number; b: number; alpha: number; } | null;
        /**
         * length
         * @see pro-api.ipcb_netinfo.length.html
         */
        length: number;
        /**
         * Network name
         * @see pro-api.ipcb_netinfo.net.html
         */
        net: string;
    }
    /**
     * Solder Mask / Paste Mask Expansion
     * @see ./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.html
     */
    /** Remark: This parameter setting includes the following three types of situations: */
    /** Signature: export interface IPCB_PrimitiveSolderMaskAndPasteMaskExpansion */
    interface IPCB_PrimitiveSolderMaskAndPasteMaskExpansion {
        /**
         * (Optional) Underlayer welding extension
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.bottompastemask.html
         */
        bottomPasteMask?: number;
        /**
         * (Optional) Underlayer solder mask extension
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.bottomsoldermask.html
         */
        bottomSolderMask?: number;
        /**
         * (Optional) Top-layer welding extension
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.toppastemask.html
         */
        topPasteMask?: number;
        /**
         * (Optional) Top-layer solder mask extension
         * @see pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.topsoldermask.html
         */
        topSolderMask?: number;
    }
    /**
     * PCB Primitive
     * @see ./pro-api.ipcb_primitive.html
     */
    /** Signature: export interface IPCB_Primitive */
    interface IPCB_Primitive {
        create: () => IPCB_Primitive | Promise<IPCB_Primitive>;
        done: () => IPCB_Primitive | Promise<IPCB_Primitive>;
        getState_PrimitiveId: () => string;
        getState_PrimitiveType: () => EPCB_PrimitiveType;
        isAsync: () => boolean;
        reset: () => IPCB_Primitive | Promise<IPCB_Primitive>;
        toAsync: () => IPCB_Primitive;
        toSync: () => IPCB_Primitive;
    }
    /**
     * PCB Primitive Interface
     * @see ./pro-api.ipcb_primitiveapi.html
     */
    /** Signature: export interface IPCB_PrimitiveAPI */
    interface IPCB_PrimitiveAPI {
        create: (...args: any[]) => IPCB_Primitive | undefined | Promise<IPCB_Primitive> | Promise<IPCB_Primitive | undefined>;
        delete: (primitiveIds: string | any | Array<string> | Array<any>) => boolean | Promise<boolean>;
        get: { (primitiveIds: string): IPCB_Primitive | undefined | Promise<IPCB_Primitive | undefined>; (primitiveIds: Array<string>): Array<IPCB_Primitive> | Promise<Array<IPCB_Primitive>>; };
        getAll: (...args: any[]) => Array<IPCB_Primitive> | Promise<Array<IPCB_Primitive>>;
        getAllPrimitiveId: (...args: any[]) => Array<string> | Promise<Array<string>>;
        modify: (primitiveId: string | any, ...args: any[]) => IPCB_Primitive | undefined | Promise<IPCB_Primitive> | Promise<IPCB_Primitive | undefined>;
    }
    /**
     * Document Ratline Calculation Function Status
     * @see ./pro-api.epcb_documentratlinecalculatingactivestatus.html
     */
    /** Signature: export declare enum EPCB_DocumentRatlineCalculatingActiveStatus */
    enum EPCB_DocumentRatlineCalculatingActiveStatus {
        /** Enable */
        ACTIVE = "active",
        /** Disable */
        INACTIVE = "inactive",
    }
    /**
     * Layer ID
     * @see ./pro-api.epcb_layerid.html
     */
    /** Signature: export declare enum EPCB_LayerId */
    enum EPCB_LayerId {
        /** Board and frame layer */
        BOARD_OUTLINE = 11,
        /** Bottom floor */
        BOTTOM = 2,
        /** Underlying assembly layer */
        BOTTOM_ASSEMBLY = 10,
        /** Bottom solder paste (soldering) layer */
        BOTTOM_PASTE_MASK = 8,
        /** Bottom silk screen printing layer */
        BOTTOM_SILKSCREEN = 4,
        /** Bottom solder resist */
        BOTTOM_SOLDER_MASK = 6,
        /** Underlying FPC reinforcement layer */
        BOTTOM_STIFFENER = 59,
        /** Component identification layer */
        COMPONENT_MARKING = 49,
        /** Component model layer */
        COMPONENT_MODEL = 52,
        /** Component shape layer */
        COMPONENT_SHAPE = 48,
        /** Custom Layer 1 */
        CUSTOM_1 = 71,
        /** Custom Layer 10 */
        CUSTOM_10 = 80,
        /** Custom Layer 11 */
        CUSTOM_11 = 81,
        /** Custom Layer 12 */
        CUSTOM_12 = 82,
        /** Custom Layer 13 */
        CUSTOM_13 = 83,
        /** Custom Layer 14 */
        CUSTOM_14 = 84,
        /** Custom Layer 15 */
        CUSTOM_15 = 85,
        /** Custom Layer 16 */
        CUSTOM_16 = 86,
        /** Custom Layer 17 */
        CUSTOM_17 = 87,
        /** Custom Layer 18 */
        CUSTOM_18 = 88,
        /** Custom Layer 19 */
        CUSTOM_19 = 89,
        /** Custom Layer 2 */
        CUSTOM_2 = 72,
        /** Custom Layer 20 */
        CUSTOM_20 = 90,
        /** Custom Layer 21 */
        CUSTOM_21 = 91,
        /** Custom Layer 22 */
        CUSTOM_22 = 92,
        /** Custom Layer 23 */
        CUSTOM_23 = 93,
        /** Custom Layer 24 */
        CUSTOM_24 = 94,
        /** Custom Layer 25 */
        CUSTOM_25 = 95,
        /** Custom Layer 26 */
        CUSTOM_26 = 96,
        /** Custom Layer 27 */
        CUSTOM_27 = 97,
        /** Custom Layer 28 */
        CUSTOM_28 = 98,
        /** Custom Layer 29 */
        CUSTOM_29 = 99,
        /** Custom Layer 3 */
        CUSTOM_3 = 73,
        /** Custom Layer 30 */
        CUSTOM_30 = 100,
        /** Custom Layer 4 */
        CUSTOM_4 = 74,
        /** Custom Layer 5 */
        CUSTOM_5 = 75,
        /** Custom Layer 6 */
        CUSTOM_6 = 76,
        /** Custom Layer 7 */
        CUSTOM_7 = 77,
        /** Custom Layer 8 */
        CUSTOM_8 = 78,
        /** Custom Layer 9 */
        CUSTOM_9 = 79,
        /** Document layer */
        DOCUMENT = 13,
        /** Drilling layer */
        DRILL_DRAWING = 56,
        /** Hole layer (inner hole of pad, via hole) */
        HOLE = 47,
        /** Inner layer 1 */
        INNER_1 = 15,
        /** Inner layer 10 */
        INNER_10 = 24,
        /** Inner layer 11 */
        INNER_11 = 25,
        /** Inner layer 12 */
        INNER_12 = 26,
        /** Inner layer 13 */
        INNER_13 = 27,
        /** Inner layer 14 */
        INNER_14 = 28,
        /** Inner layer 15 */
        INNER_15 = 29,
        /** Inner layer 16 */
        INNER_16 = 30,
        /** Inner layer 17 */
        INNER_17 = 31,
        /** Inner layer 18 */
        INNER_18 = 32,
        /** Inner 19 */
        INNER_19 = 33,
        /** Inner layer 2 */
        INNER_2 = 16,
        /** Inner layer 20 */
        INNER_20 = 34,
        /** Inner layer 21 */
        INNER_21 = 35,
        /** Inner layer 22 */
        INNER_22 = 36,
        /** Inner layer 23 */
        INNER_23 = 37,
        /** Inner layer 24 */
        INNER_24 = 38,
        /** Inner layer 25 */
        INNER_25 = 39,
        /** Inner layer 26 */
        INNER_26 = 40,
        /** Inner layer 27 */
        INNER_27 = 41,
        /** Inner layer 28 */
        INNER_28 = 42,
        /** Inner layer 29 */
        INNER_29 = 43,
        /** Inner layer 3 */
        INNER_3 = 17,
        /** Inner layer 30 */
        INNER_30 = 44,
        /** Inner layer 31 */
        INNER_31 = 45,
        /** Inner layer 32 */
        INNER_32 = 46,
        /** Inner layer 4 */
        INNER_4 = 18,
        /** Inner layer 5 */
        INNER_5 = 19,
        /** Inner layer 6 */
        INNER_6 = 20,
        /** Inner layer 7 */
        INNER_7 = 21,
        /** Inner layer 8 */
        INNER_8 = 22,
        /** Inner layer 9 */
        INNER_9 = 23,
        /** Mechanical layer */
        MECHANICAL = 14,
        /** Multi-layer */
        MULTI = 12,
        /** Pin hanging layer */
        PIN_FLOATING = 51,
        /** Pin soldering layer */
        PIN_SOLDERING = 50,
        /** Flying line layer */
        RATLINE = 57,
        /** 3D shell base */
        SHELL_3D_BOTTOM = 55,
        /** 3D shell border layer */
        SHELL_3D_OUTLINE = 53,
        /** 3D shell top layer */
        SHELL_3D_TOP = 54,
        /** Interlayer (dielectric substrate)1 */
        SUBSTRATE_1 = 101,
        /** Top level */
        TOP = 1,
        /** Top-level assembly layer */
        TOP_ASSEMBLY = 9,
        /** Top solder paste (soldering) layer */
        TOP_PASTE_MASK = 7,
        /** Top screen printing layer */
        TOP_SILKSCREEN = 3,
        /** Top solder resist */
        TOP_SOLDER_MASK = 5,
        /** Top FPC reinforcement layer */
        TOP_STIFFENER = 58,
    }
    /**
     * Layer Color Configuration
     * @see ./pro-api.epcb_layercolorconfiguration.html
     */
    /** Signature: export declare enum EPCB_LayerColorConfiguration */
    enum EPCB_LayerColorConfiguration {
        /** Altium Designer */
        ALTIUM_DESIGNER = 2,
        /** EasyEDA */
        EASYEDA = 1,
        /** JialiChuang EDA */
        JLCEDA = 1,
        /** KiCAD */
        KICAD = 4,
        /** PADS */
        PADS = 3,
    }
    /**
     * Layer Type
     * @see ./pro-api.epcb_layertype.html
     */
    /** Signature: export declare enum EPCB_LayerType */
    enum EPCB_LayerType {
        /** Assembly layer */
        ASSEMBLY = "ASSEMBLY",
        /** Custom Layer */
        CUSTOM = "CUSTOM",
        /** Inner electrical layer */
        INTERNAL_ELECTRICAL = "PLANE",
        /** other */
        OTHER = "OTHER",
        /** Solder paste (soldering) layer */
        PASTE_MASK = "PASTE_MASK",
        /** Signal layer */
        SIGNAL = "SIGNAL",
        /** Silk screen layer */
        SILKSCREEN = "SILKSCREEN",
        /** Solder resist layer */
        SOLDER_MASK = "SOLDER_MASK",
    }
    /**
     * PCB Plate Type
     * @see ./pro-api.epcb_pcbplatetype.html
     */
    /** Signature: export declare enum EPCB_PcbPlateType */
    enum EPCB_PcbPlateType {
        /** FPC soft board */
        FPC = 2,
        /** Ordinary sheet */
        NORMAL = 1,
    }
    /**
     * Inactive Layer Display Mode
     * @see ./pro-api.epcb_inactivelayerdisplaymode.html
     */
    /** Signature: export declare enum EPCB_InactiveLayerDisplayMode */
    enum EPCB_InactiveLayerDisplayMode {
        /** hide */
        HIDE = 2,
        /** Normal brightness */
        NORMAL_BRIGHTNESS = 0,
        /** Grease */
        TURN_GRAY = 1,
    }
    /**
     * PDF Output Method
     * @see ./pro-api.epcb_pdfoutputmethod.html
     */
    /** Signature: export declare enum EPCB_PdfOutputMethod */
    enum EPCB_PdfOutputMethod {
        /** Single multi-page PDF */
        MULTI_PAGE_PDF = "A Multi Page PDF",
        /** Multiple single page PDFs (the compressed package containing all decomposed layers PDF files will be output) */
        MULTIPLE_SINGLE_PAGE_PDF = "Multiple Single Page PDF",
        /** Single single page PDF (a compressed package containing one PDF file per layer will be output) */
        SINGLE_PAGE_PDF = "A Single Page PDF",
    }
    /**
     * Primitive Type
     * @see ./pro-api.epcb_primitivetype.html
     */
    /** Signature: export declare enum EPCB_PrimitiveType */
    enum EPCB_PrimitiveType {
        /** Arc lines */
        ARC = "Arc",
        /** property */
        ATTRIBUTE = "Attribute",
        /** Devices */
        COMPONENT = "Component",
        /** Device pad */
        COMPONENT_PAD = "ComponentPad",
        /** Dimensions */
        DIMENSION = "Dimension",
        /** filling */
        FILL = "Fill",
        /** image */
        IMAGE = "Image",
        /** straight line */
        LINE = "Line",
        /** Binary embedded objects */
        OBJECT = "Object",
        /** Solder pad */
        PAD = "Pad",
        /** Folding line */
        POLYLINE = "Polyline",
        /** Copper clad border */
        POUR = "Pour",
        /** Copper clad filling */
        POURED = "Poured",
        /** area */
        REGION = "Region",
        /** text */
        STRING = "String",
        /** Through holes */
        VIA = "Via",
    }
    /**
     * Arc Interactive Mode
     * @see ./pro-api.epcb_primitivearcinteractivemode.html
     */
    /** Signature: export declare enum EPCB_PrimitiveArcInteractiveMode */
    enum EPCB_PrimitiveArcInteractiveMode {
        /** Central arc interaction */
        CENTER_ARC = 2,
        /** Two-point arc interaction */
        TWO_POINT_ARC = 1,
    }
    /**
     * Dimension Type
     * @see ./pro-api.epcb_primitivedimensiontype.html
     */
    /** Signature: export declare enum EPCB_PrimitiveDimensionType */
    enum EPCB_PrimitiveDimensionType {
        /** angle */
        ANGLE = "Protractor Dimension",
        /** length */
        LENGTH = "Length Dimension",
        /** radius */
        RADIUS = "Radius Dimension",
    }
    /**
     * Fill Primitive Fill Mode
     * @see ./pro-api.epcb_primitivefillmode.html
     */
    /** Remark: Grid filling and internal electrical layer filling are reserved configurations */
    /** Signature: export declare enum EPCB_PrimitiveFillMode */
    enum EPCB_PrimitiveFillMode {
        /** Inner electrical layer filling */
        INNER_ELECTRICAL_LAYER = 2,
        /** Mesh fill */
        MESH = 1,
        /** Solid filling */
        SOLID = 0,
    }
    /**
     * Pad Type
     * @see ./pro-api.epcb_primitivepadtype.html
     */
    /** Signature: export declare enum EPCB_PrimitivePadType */
    enum EPCB_PrimitivePadFunction {
        /** Logo point */
        MARK_POINT = 2,
        /** Solder pad */
        NORMAL = 0,
        /** Test points */
        TEST = 1,
    }
    /**
     * Pad Heat Welding Connection Method
     * @see ./pro-api.epcb_primitivepadheatweldingconnectionmethod.html
     */
    /** Signature: export declare enum EPCB_PrimitivePadHeatWeldingConnectionMethod */
    enum EPCB_PrimitivePadHeatWeldingConnectionMethod {
        /** Direct connection */
        DIRECT_CONNECTED = "Direct-connected",
        /** Divergent */
        DIVERGENT = "Divergent",
        /** No connection */
        NON_CONNECTED = "Non-connected",
    }
    /**
     * Pad Hole Type
     * @see ./pro-api.epcb_primitivepadholetype.html
     */
    /** Signature: export declare enum EPCB_PrimitivePadHoleType */
    enum EPCB_PrimitivePadHoleType {
        /** rectangle */
        RECTANGLE = "RECT",
        /** Oval */
        ROUND = "ROUND",
    }
    /**
     * Pad Shape Type
     * @see ./pro-api.epcb_primitivepadshapetype.html
     */
    /** Signature: export declare enum EPCB_PrimitivePadShapeType */
    enum EPCB_PrimitivePadShapeType {
        /** Circular */
        ELLIPSE = "ELLIPSE",
        /** Oval */
        OBLONG = "OVAL",
        /** Polyline complex polygons */
        POLYLINE_COMPLEX_POLYGON = "POLYGON",
        /** rectangle */
        RECTANGLE = "RECT",
        /** Regular polygon */
        REGULAR_POLYGON = "NGON",
    }
    /**
     * Copper Pour Fill Method
     * @see ./pro-api.epcb_primitivepourfillmethod.html
     */
    /** Signature: export declare enum EPCB_PrimitivePourFillMethod */
    enum EPCB_PrimitivePourFillMethod {
        /** 90 degree grid */
        GRID = "90grid",
        /** 45 degree grid */
        GRID45 = "45grid",
        /** Solid filling */
        SOLID = "solid",
    }
    /**
     * Region Primitive Rule Type
     * @see ./pro-api.epcb_primitiveregionruletype.html
     */
    /** Remark: FOLLOW_REGION_RULE is the constraint area */
    /** Signature: export declare enum EPCB_PrimitiveRegionRuleType */
    enum EPCB_PrimitiveRegionRuleType {
        /** Constraint area */
        FOLLOW_REGION_RULE = 9,
        /** Disabled components */
        NO_COMPONENTS = 2,
        /** Filling is prohibited */
        NO_FILLS = 6,
        /** Prohibit internal electrical layer */
        NO_INNER_ELECTRICAL_LAYERS = 8,
        /** Copper cover is prohibited */
        NO_POURS = 7,
        /** No via holes */
        NO_VIAS = 3,
        /** Prohibit wiring */
        NO_WIRES = 5,
    }
    /**
     * Via Type
     * @see ./pro-api.epcb_primitiveviatype.html
     */
    /** Signature: export declare enum EPCB_PrimitiveViaType */
    enum EPCB_PrimitiveViaType {
        /** Blind buried hole */
        BLIND = 1,
        /** Suture hole */
        SUTURE = 2,
        /** Through holes */
        VIA = 0,
    }
    /**
     * Selectable Layers
     * @see ./pro-api.tpcb_layersintheselectable.html
     */
    /** Remark: Here are all layers that can be selected and set visibility in the Editor Layers menu */
    /** Signature: export type TPCB_LayersInTheSelectable = | TPCB_LayersOfInner TPCB_LayersOfCustom EPCB_LayerId.TOP EPCB_LayerId . TOP EPCB_LayerId.TOP_SILKSCREEN TOP_SILKSCREEN EPCB_LayerId.TOP_SOLDER_MASK TOP_SOLDER_MASK EPCB_LayerId.TOP_PASTE_MASK TOP_PASTE_MASK EPCB_LayerId.TOP_ASSEMBLY TOP_ASSEMBLY EPCB_LayerId.TOP_STIFFENER TOP_STIFFENER EPCB_LayerId.BOTTOM BOTTOM EPCB_LayerId.BOTTOM_SILKSCREEN BOTTOM_SILKSCREEN EPCB_LayerId.BOTTOM_SOLDER_MASK BOTTOM_SOLDER_MASK EPCB_LayerId.BOTTOM_PASTE_MASK BOTTOM_PASTE_MASK EPCB_LayerId.BOTTOM_ASSEMBLY BOTTOM_ASSEMBLY EPCB_LayerId.BOTTOM_STIFFENER BOTTOM_STIFFENER EPCB_LayerId.BOARD_OUTLINE BOARD_OUTLINE EPCB_LayerId.MULTI MULTI EPCB_LayerId.DOCUMENT DOCUMENT EPCB_LayerId.MECHANICAL MECHANICAL EPCB_LayerId.DRILL_DRAWING DRILL_DRAWING EPCB_LayerId.RATLINE RATLINE EPCB_LayerId.COMPONENT_SHAPE COMPONENT_SHAPE EPCB_LayerId.COMPONENT_MARKING COMPONENT_MARKING EPCB_LayerId.PIN_SOLDERING PIN_SOLDERING EPCB_LayerId.PIN_FLOATING PIN_FLOATING EPCB_LayerId.SHELL_3D_OUTLINE SHELL_3D_OUTLINE EPCB_LayerId.SHELL_3D_TOP SHELL_3D_TOP EPCB_LayerId.SHELL_3D_BOTTOM; SHELL_3D_BOTTOM ; */
    type TPCB_LayersInTheSelectable = any;
    /**
     * Inner Layers
     * @see ./pro-api.tpcb_layersofinner.html
     */
    /** Signature: export type TPCB_LayersOfInner = | EPCB_LayerId.INNER_1 EPCB_LayerId . INNER_1 EPCB_LayerId.INNER_2 INNER_2 EPCB_LayerId.INNER_3 INNER_3 EPCB_LayerId.INNER_4 INNER_4 EPCB_LayerId.INNER_5 INNER_5 EPCB_LayerId.INNER_6 INNER_6 EPCB_LayerId.INNER_7 INNER_7 EPCB_LayerId.INNER_8 INNER_8 EPCB_LayerId.INNER_9 INNER_9 EPCB_LayerId.INNER_10 INNER_10 EPCB_LayerId.INNER_11 INNER_11 EPCB_LayerId.INNER_12 INNER_12 EPCB_LayerId.INNER_13 INNER_13 EPCB_LayerId.INNER_14 INNER_14 EPCB_LayerId.INNER_15 INNER_15 EPCB_LayerId.INNER_16 INNER_16 EPCB_LayerId.INNER_17 INNER_17 EPCB_LayerId.INNER_18 INNER_18 EPCB_LayerId.INNER_19 INNER_19 EPCB_LayerId.INNER_20 INNER_20 EPCB_LayerId.INNER_21 INNER_21 EPCB_LayerId.INNER_22 INNER_22 EPCB_LayerId.INNER_23 INNER_23 EPCB_LayerId.INNER_24 INNER_24 EPCB_LayerId.INNER_25 INNER_25 EPCB_LayerId.INNER_26 INNER_26 EPCB_LayerId.INNER_27 INNER_27 EPCB_LayerId.INNER_28 INNER_28 EPCB_LayerId.INNER_29 INNER_29 EPCB_LayerId.INNER_30 INNER_30 EPCB_LayerId.INNER_31 INNER_31 EPCB_LayerId.INNER_32; INNER_32 ; */
    type TPCB_LayersOfInner = any;
    /**
     * Custom Layers
     * @see ./pro-api.tpcb_layersofcustom.html
     */
    /** Signature: export type TPCB_LayersOfCustom = | EPCB_LayerId.CUSTOM_1 EPCB_LayerId . CUSTOM_1 EPCB_LayerId.CUSTOM_2 CUSTOM_2 EPCB_LayerId.CUSTOM_3 CUSTOM_3 EPCB_LayerId.CUSTOM_4 CUSTOM_4 EPCB_LayerId.CUSTOM_5 CUSTOM_5 EPCB_LayerId.CUSTOM_6 CUSTOM_6 EPCB_LayerId.CUSTOM_7 CUSTOM_7 EPCB_LayerId.CUSTOM_8 CUSTOM_8 EPCB_LayerId.CUSTOM_9 CUSTOM_9 EPCB_LayerId.CUSTOM_10 CUSTOM_10 EPCB_LayerId.CUSTOM_11 CUSTOM_11 EPCB_LayerId.CUSTOM_12 CUSTOM_12 EPCB_LayerId.CUSTOM_13 CUSTOM_13 EPCB_LayerId.CUSTOM_14 CUSTOM_14 EPCB_LayerId.CUSTOM_15 CUSTOM_15 EPCB_LayerId.CUSTOM_16 CUSTOM_16 EPCB_LayerId.CUSTOM_17 CUSTOM_17 EPCB_LayerId.CUSTOM_18 CUSTOM_18 EPCB_LayerId.CUSTOM_19 CUSTOM_19 EPCB_LayerId.CUSTOM_20 CUSTOM_20 EPCB_LayerId.CUSTOM_21 CUSTOM_21 EPCB_LayerId.CUSTOM_22 CUSTOM_22 EPCB_LayerId.CUSTOM_23 CUSTOM_23 EPCB_LayerId.CUSTOM_24 CUSTOM_24 EPCB_LayerId.CUSTOM_25 CUSTOM_25 EPCB_LayerId.CUSTOM_26 CUSTOM_26 EPCB_LayerId.CUSTOM_27 CUSTOM_27 EPCB_LayerId.CUSTOM_28 CUSTOM_28 EPCB_LayerId.CUSTOM_29 CUSTOM_29 EPCB_LayerId.CUSTOM_30; CUSTOM_30 ; */
    type TPCB_LayersOfCustom = any;
    /**
     * Component Layers
     * @see ./pro-api.tpcb_layersofcomponent.html
     */
    /** Signature: export type TPCB_LayersOfComponent = EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM; EPCB_LayerId . TOP BOTTOM ; */
    type TPCB_LayersOfComponent = any;
    /**
     * Copper Layers
     * @see ./pro-api.tpcb_layersofcopper.html
     */
    /** Remark: This is for the convenience of single-layer copper foil layer design, and does not include EPCB_LayerId.MULTI */
    /** Signature: export type TPCB_LayersOfCopper = TPCB_LayersOfInner | EPCB_LayerId.TOP EPCB_LayerId.BOTTOM; EPCB_LayerId . TOP BOTTOM ; */
    type TPCB_LayersOfCopper = any;
    /**
     * Pad Layers
     * @see ./pro-api.tpcb_layersofpad.html
     */
    /** Signature: export type TPCB_LayersOfPad = EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM EPCB_LayerId.MULTI; EPCB_LayerId . TOP BOTTOM MULTI ; */
    type TPCB_LayersOfPad = any;
    /**
     * Line Layers
     * @see ./pro-api.tpcb_layersofline.html
     */
    /** Signature: export type TPCB_LayersOfLine = | TPCB_LayersOfCopper TPCB_LayersOfCustom EPCB_LayerId.TOP_SILKSCREEN EPCB_LayerId . TOP_SILKSCREEN EPCB_LayerId.TOP_SOLDER_MASK TOP_SOLDER_MASK EPCB_LayerId.TOP_PASTE_MASK TOP_PASTE_MASK EPCB_LayerId.TOP_ASSEMBLY TOP_ASSEMBLY EPCB_LayerId.BOTTOM_SILKSCREEN BOTTOM_SILKSCREEN EPCB_LayerId.BOTTOM_SOLDER_MASK BOTTOM_SOLDER_MASK EPCB_LayerId.BOTTOM_PASTE_MASK BOTTOM_PASTE_MASK EPCB_LayerId.BOTTOM_ASSEMBLY BOTTOM_ASSEMBLY EPCB_LayerId.BOARD_OUTLINE BOARD_OUTLINE EPCB_LayerId.DOCUMENT DOCUMENT EPCB_LayerId.MECHANICAL MECHANICAL EPCB_LayerId.DRILL_DRAWING; DRILL_DRAWING ; */
    type TPCB_LayersOfLine = any;
    /**
     * Dimension Layers
     * @see ./pro-api.tpcb_layersofdimension.html
     */
    /** Signature: export type TPCB_LayersOfDimension = | TPCB_LayersOfCustom EPCB_LayerId.TOP_SILKSCREEN EPCB_LayerId . TOP_SILKSCREEN EPCB_LayerId.BOTTOM_SILKSCREEN BOTTOM_SILKSCREEN EPCB_LayerId.DOCUMENT DOCUMENT EPCB_LayerId.MECHANICAL; MECHANICAL ; */
    type TPCB_LayersOfDimension = any;
    /**
     * Complex Polygon (SVG Image, Text) Layers
     * @see ./pro-api.tpcb_layersofimage.html
     */
    /** Signature: export type TPCB_LayersOfImage = | TPCB_LayersOfCopper TPCB_LayersOfCustom EPCB_LayerId.TOP_SILKSCREEN EPCB_LayerId . TOP_SILKSCREEN EPCB_LayerId.TOP_SOLDER_MASK TOP_SOLDER_MASK EPCB_LayerId.TOP_ASSEMBLY TOP_ASSEMBLY EPCB_LayerId.BOTTOM_SILKSCREEN BOTTOM_SILKSCREEN EPCB_LayerId.BOTTOM_SOLDER_MASK BOTTOM_SOLDER_MASK EPCB_LayerId.BOTTOM_ASSEMBLY BOTTOM_ASSEMBLY EPCB_LayerId.DOCUMENT DOCUMENT EPCB_LayerId.MECHANICAL MECHANICAL EPCB_LayerId.DRILL_DRAWING; DRILL_DRAWING ; */
    type TPCB_LayersOfImage = any;
    /**
     * Fill Layers
     * @see ./pro-api.tpcb_layersoffill.html
     */
    /** Remark: When the filling layer is EPCB_LayerId.MULTI, it represents the trench area. */
    /** Signature: export type TPCB_LayersOfFill = | TPCB_LayersOfCopper TPCB_LayersOfCustom EPCB_LayerId.TOP_SILKSCREEN EPCB_LayerId . TOP_SILKSCREEN EPCB_LayerId.TOP_SOLDER_MASK TOP_SOLDER_MASK EPCB_LayerId.TOP_PASTE_MASK TOP_PASTE_MASK EPCB_LayerId.TOP_ASSEMBLY TOP_ASSEMBLY EPCB_LayerId.BOTTOM_SILKSCREEN BOTTOM_SILKSCREEN EPCB_LayerId.BOTTOM_SOLDER_MASK BOTTOM_SOLDER_MASK EPCB_LayerId.BOTTOM_PASTE_MASK BOTTOM_PASTE_MASK EPCB_LayerId.BOTTOM_ASSEMBLY BOTTOM_ASSEMBLY EPCB_LayerId.DOCUMENT DOCUMENT EPCB_LayerId.MECHANICAL MECHANICAL EPCB_LayerId.MULTI; MULTI ; */
    type TPCB_LayersOfFill = any;
    /**
     * Region Layers
     * @see ./pro-api.tpcb_layersofregion.html
     */
    /** Signature: export type TPCB_LayersOfRegion = TPCB_LayersOfCopper | EPCB_LayerId.MULTI; EPCB_LayerId . MULTI ; */
    type TPCB_LayersOfRegion = any;
    /**
     * Binary Embedded Object Layers
     * @see ./pro-api.tpcb_layersofobject.html
     */
    /** Signature: export type TPCB_LayersOfObject = EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.BOTTOM_SILKSCREEN EPCB_LayerId.DOCUMENT; EPCB_LayerId . TOP_SILKSCREEN BOTTOM_SILKSCREEN DOCUMENT ; */
    type TPCB_LayersOfObject = any;
    /**
     * Allowed Layer Types for Inner Layers
     * @see ./pro-api.tpcb_layertypesofinnerlayer.html
     */
    /** Signature: export type TPCB_LayerTypesOfInnerLayer = EPCB_LayerType.SIGNAL | EPCB_LayerType.INTERNAL_ELECTRICAL; EPCB_LayerType . SIGNAL INTERNAL_ELECTRICAL ; */
    type TPCB_LayerTypesOfInnerLayer = any;
    /**
     * Single Polygon Source Array
     * @see ./pro-api.tpcb_polygonsourcearray.html
     */
    /** Remark: A single polygon is the area described by an uninterrupted line with the head and tail overlapping. If the head and tail overlap, it will automatically overlap if the head and tail do not overlap. */
    /** Signature: export type TPCB_PolygonSourceArray = Array<'L' | 'ARC' 'CARC' 'C' 'R' 'CIRCLE' number>; Array < 'L' number >; */
    type TPCB_PolygonSourceArray = any;
    /**
     * Dimension Coordinate Set
     * @see ./pro-api.tpcb_primitivedimensioncoordinateset.html
     */
    /** Remark: There are three types of dimension coordinate sets: */
    /** Signature: export type TPCB_PrimitiveDimensionCoordinateSet = | [number, number, number] [ number , ] number]; ]; */
    type TPCB_PrimitiveDimensionCoordinateSet = any;
    /**
     * Pad Hole
     * @see ./pro-api.tpcb_primitivepadhole.html
     */
    /** Remark: There are currently two types of pad drilling: */
    /** Signature: export type TPCB_PrimitivePadHole = [EPCB_PrimitivePadHoleType, number, number]; [ EPCB_PrimitivePadHoleType , number ]; */
    type TPCB_PrimitivePadHole = any;
    /**
     * Pad Shape
     * @see ./pro-api.tpcb_primitivepadshape.html
     */
    /** Remark: There are currently four types of solder pads: */
    /** Signature: export type TPCB_PrimitivePadShape = | [EPCB_PrimitivePadShapeType.ELLIPSE EPCB_PrimitivePadShapeType.OBLONG EPCB_PrimitivePadShapeType.REGULAR_POLYGON, number, number] [ EPCB_PrimitivePadShapeType . ELLIPSE OBLONG REGULAR_POLYGON , number ] [EPCB_PrimitivePadShapeType.RECTANGLE, RECTANGLE [EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, TPCB_PolygonSourceArray Array<TPCB_PolygonSourceArray>]; POLYLINE_COMPLEX_POLYGON Array < >]; */
    type TPCB_PrimitivePadShape = any;
    /**
     * Special Pad Shape
     * @see ./pro-api.tpcb_primitivespecialpadshape.html
     */
    /** Remark: Array<[startLayer, endLayer, TPCB_PrimitivePadShape]> */
    /** Signature: export type TPCB_PrimitiveSpecialPadShape = Array<[number, number, TPCB_PrimitivePadShape]>; Array <[ number , TPCB_PrimitivePadShape ]>; */
    type TPCB_PrimitiveSpecialPadShape = any;
    /**
     * Single Polygon
     * @see ./pro-api.ipcb_polygon.html
     */
    /** Signature: export declare class IPCB_Polygon */
    interface IPCB_Polygon {
        // TODO: Define primitive properties
    }
    /**
     * Complex Polygon
     * @see ./pro-api.ipcb_complexpolygon.html
     */
    /** Remark: A complex polygon can contain multiple single polygons, which are combined by fill-rule to achieve Boolean operation of the polygon. Currently, the nonzero fill-rule is used in the EDA Professional Edition of Jialichuang. */
    /** Signature: export declare class IPCB_ComplexPolygon */
    interface IPCB_ComplexPolygon {
        // TODO: Define primitive properties
    }
    /**
     * Arc Line Primitive
     * @see ./pro-api.ipcb_primitivearc.html
     */
    /** Remark: Lines and arcs are both conductors, corresponding to the line traces and arc traces of the canvas */
    /** Signature: export declare class IPCB_PrimitiveArc implements IPCB_Primitive */
    interface IPCB_PrimitiveArc {
        // TODO: Define primitive properties
    }
    /**
     * Component Primitive
     * @see ./pro-api.ipcb_primitivecomponent.html
     */
    /** Signature: export declare class IPCB_PrimitiveComponent implements IPCB_Primitive */
    interface IPCB_PrimitiveComponent {
        // TODO: Define primitive properties
    }
    /**
     * Dimension Primitive
     * @see ./pro-api.ipcb_primitivedimension.html
     */
    /** Signature: export declare class IPCB_PrimitiveDimension implements IPCB_Primitive */
    interface IPCB_PrimitiveDimension {
        // TODO: Define primitive properties
    }
    /**
     * Fill Primitive
     * @see ./pro-api.ipcb_primitivefill.html
     */
    /** Signature: export declare class IPCB_PrimitiveFill implements IPCB_Primitive */
    interface IPCB_PrimitiveFill {
        // TODO: Define primitive properties
    }
    /**
     * Image Primitive
     * @see ./pro-api.ipcb_primitiveimage.html
     */
    /** Signature: export declare class IPCB_PrimitiveImage implements IPCB_Primitive */
    interface IPCB_PrimitiveImage {
        // TODO: Define primitive properties
    }
    /**
     * Line Primitive
     * @see ./pro-api.ipcb_primitiveline.html
     */
    /** Remark: Lines and arcs are both conductors, corresponding to the line traces and arc traces of the canvas */
    /** Signature: export declare class IPCB_PrimitiveLine implements IPCB_Primitive */
    interface IPCB_PrimitiveLine {
        // TODO: Define primitive properties
    }
    /**
     * Binary Embedded Object Primitive
     * @see ./pro-api.ipcb_primitiveobject.html
     */
    /** Signature: export declare class IPCB_PrimitiveObject implements IPCB_Primitive */
    interface IPCB_PrimitiveObject {
        // TODO: Define primitive properties
    }
    /**
     * Pad Primitive
     * @see ./pro-api.ipcb_primitivepad.html
     */
    /** Signature: export declare class IPCB_PrimitivePad implements IPCB_Primitive */
    interface IPCB_PrimitivePad {
        // TODO: Define primitive properties
    }
    /**
     * Component Pad Primitive
     * @see ./pro-api.ipcb_primitivecomponentpad.html
     */
    /** Remark: The device pad primitive is a special primitive that refers to the pads associated with the package on the PCB canvas. */
    /** Signature: export declare class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad */
    interface IPCB_PrimitiveComponentPad {
        // TODO: Define primitive properties
    }
    /**
     * Polyline Primitive
     * @see ./pro-api.ipcb_primitivepolyline.html
     */
    /** Signature: export declare class IPCB_PrimitivePolyline implements IPCB_Primitive */
    interface IPCB_PrimitivePolyline {
        // TODO: Define primitive properties
    }
    /**
     * Copper Pour Border Primitive
     * @see ./pro-api.ipcb_primitivepour.html
     */
    /** Signature: export declare class IPCB_PrimitivePour implements IPCB_Primitive */
    interface IPCB_PrimitivePour {
        // TODO: Define primitive properties
    }
    /**
     * Region Primitive
     * @see ./pro-api.ipcb_primitiveregion.html
     */
    /** Signature: export declare class IPCB_PrimitiveRegion implements IPCB_Primitive */
    interface IPCB_PrimitiveRegion {
        // TODO: Define primitive properties
    }
    /**
     * Via Primitive
     * @see ./pro-api.ipcb_primitivevia.html
     */
    /** Signature: export declare class IPCB_PrimitiveVia implements IPCB_Primitive */
    interface IPCB_PrimitiveVia {
        // TODO: Define primitive properties
    }
}
declare namespace Panel {
    /**
     * Panel / Document Operations Class
     * @see ./pro-api.pnl_document.html
     */
    /** Remark: Operations on the overall design document */
    /** Signature: export declare class PNL_Document */
    class PNL_Document {
        /**
         * (BETA) Save document
         * @see pro-api.pnl_document.save.html
         */
    /** Whether the save operation is successful, and errors such as the failure to save and upload fail will be returned to false. */
        save(): Promise<boolean>;
    }
}
declare namespace Integrated Library {
    /**
     * Integrated Library / Library List Class
     * @see ./pro-api.lib_librarieslist.html
     */
    /** Remark: All interfaces here are based on the editor's current workspace environment. If you need to switch to another workspace, please use the DMT_Workspace.toggleToWorkspace() interface to switch the workspace */
    /** Signature: export declare class LIB_LibrariesList */
    class LIB_LibrariesList {
        /**
         * (BETA) Get a list of all libraries
         * @see pro-api.lib_librarieslist.getalllibrarieslist.html
         */
    /**
     * Library information list
     * Information about system libraries, personal libraries, engineering libraries, and collection libraries will not be obtained here. If you want to obtain their information, please use the getSystemLibraryUuid, getPersonalLibraryUuid, getProjectLibraryUuid, getFavoriteLibraryUuid interfaces
     */
        getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;
        /**
         * (BETA) Get the UUID of the Collection
         * @see pro-api.lib_librarieslist.getfavoritelibraryuuid.html
         */
    /**
     * Favorite library UUID
     * The UUID of the collection in the current editor workspace will be obtained
     */
        getFavoriteLibraryUuid(): Promise<string | undefined>;
        /**
         * (BETA) Get the UUID of the personal library
         * @see pro-api.lib_librarieslist.getpersonallibraryuuid.html
         */
    /**
     * UUID of personal library
     * The UUID of the personal library under the current editor workspace will be obtained. In the private deployment environment, the personal library will not exist. This interface will always return undefined
     */
        getPersonalLibraryUuid(): Promise<string | undefined>;
        /**
         * (BETA) Get the UUID of the project library
         * @see pro-api.lib_librarieslist.getprojectlibraryuuid.html
         */
    /**
     * UUID of the project library
     * Calling without project opening will return undefined
     */
        getProjectLibraryUuid(): Promise<string | undefined>;
        /**
         * (BETA) Get the UUID of the system library
         * @see pro-api.lib_librarieslist.getsystemlibraryuuid.html
         */
    /** UUID of the system library */
        getSystemLibraryUuid(): Promise<string | undefined>;
    }
    /**
     * Integrated Library / Library Classification Index Class
     * @see ./pro-api.lib_classification.html
     */
    /** Signature: export declare class LIB_Classification */
    class LIB_Classification {
        /**
         * (BETA) Create a Level 1 Classification
         * @see pro-api.lib_classification.createprimary.html
         */
    /** Classification Index */
        createPrimary(        /** Library UUID */
        libraryUuid: string,         /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType,         /** First-level classification name */
        primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
        /**
         * (BETA) Create a secondary category
         * @see pro-api.lib_classification.createsecondary.html
         */
    /** Classification Index */
        createSecondary(        /** Library UUID */
        libraryUuid: string,         /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType,         /** Level 1 classification UUID */
        primaryClassificationUuid: string,         /** Secondary classification name */
        secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
        /**
         * (BETA) Delete the classification of the specified index
         * @see pro-api.lib_classification.deletebyindex.html
         */
    /** Is the operation successful? */
        deleteByIndex(        /**
         * Classification Index
         * @see pro-api.ilib_classificationindex.html
         */
        classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;
        /**
         * (BETA) Delete the category of the specified UUID
         * @see pro-api.lib_classification.deletebyuuid.html
         */
    /** Is the operation successful? */
        deleteByUuid(        /** Library UUID */
        libraryUuid: string, classificationUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets a tree composed of all classified information
         * @see pro-api.lib_classification.getallclassificationtree.html
         */
    /** Tree structure data composed of classified information */
        getAllClassificationTree(        /** Library UUID */
        libraryUuid: string,         /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType): Promise<{ name: string; uuid: string; children?: { name: string; uuid: string; }[] | undefined; }[]>;
        /**
         * (BETA) èژ·هڈ–وŒ‡ه®ڑهگچç§°çڑ„هˆ†ç±»çڑ„هˆ†ç±»ç´¢ه¼•
         * @see pro-api.lib_classification.getindexbyname.html
         */
    /**
     * Classification Index
     * The classification index contains the UUID of the classification. For details, please refer to ILIB_ClassificationIndex
     */
        getIndexByName(        /** Library UUID */
        libraryUuid: string,         /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType,         /** First-level classification name */
        primaryClassificationName: string,         /** (Optional) Secondary Classification Name */
        secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
        /**
         * (BETA) Gets the name of the category for the specified index
         * @see pro-api.lib_classification.getnamebyindex.html
         */
    /** Name of two-level classification */
        getNameByIndex(        /**
         * Classification Index
         * @see pro-api.ilib_classificationindex.html
         */
        classificationIndex: ILIB_ClassificationIndex): Promise<{ primaryClassificationName: string; secondaryClassificationName?: string | undefined; } | undefined>;
        /**
         * (BETA) Gets the name of the category for the specified UUID
         * @see pro-api.lib_classification.getnamebyuuid.html
         */
    /** Name of two-level classification */
        getNameByUuid(        /** Library UUID */
        libraryUuid: string,         /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType,         /** Level 1 classification UUID */
        primaryClassificationUuid: string,         /** (Optional) Secondary classification UUID. If not specified, only the first-level classification information will be obtained. */
        secondaryClassificationUuid: string): Promise<{ primaryClassificationName: string; secondaryClassificationName?: string | undefined; } | undefined>;
    }
    /**
     * Integrated Library / Device Class
     * @see ./pro-api.lib_device.html
     */
    /** Signature: export declare class LIB_Device */
    class LIB_Device {
        /**
         * (BETA) Replicating Devices
         * @see pro-api.lib_device.copy.html
         */
    /** UUID of new devices in the target library */
        copy(        /** Device UUID */
        deviceUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New device name, if there is a duplicate device in the target library, it will cause copying failure */
        newDeviceName: string): Promise<string | undefined>;
        /**
         * (BETA) Create a device
         * @see pro-api.lib_device.create.html
         */
    /** Device UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Device name */
        deviceName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /**
         * (Optional) Associate symbols, encapsulations, and images. If you specify symbolType, you will create a new symbol. If you do not create a new symbol, you will not specify a symbol. However, please note that if you do not create a new symbol or specify the association information of the symbol, you will not be able to create a device.
         * @see pro-api.elib_symboltype.html
         */
        association: { symbolType?: ELIB_SymbolType; symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string; footprint?: { uuid: string; libraryUuid: string; }; model3D?: { uuid: string; libraryUuid: string; }; imageData?: File | Blob; },         /** (Optional) Description */
        description: string,         /**
         * (Optional) Other parameters, only designer, addIntoBom, addIntoPcb has default values
         * @see pro-api.ilib_deviceextendpropertyitem.html
         */
        property: ILIB_DeviceExtendPropertyItem): Promise<string | undefined>;
        /**
         * (BETA) Remove device
         * @see pro-api.lib_device.delete.html
         */
    /** Is the operation successful? */
        delete(        /** Device UUID */
        deviceUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all the properties of the device
         * @see pro-api.lib_device.get.html
         */
    /** Device Properties */
        get(        /** Device UUID */
        deviceUuid: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_DeviceItem | undefined>;
        /**
         * (BETA) Use License C number to obtain the device
         * @see pro-api.lib_device.getbylcscids.html
         */
    /**
     * Searched device properties
     * By default, if multiple devices with the same C number are matched within the same library, only the first result will be returned;
     * If you want to return multiple results, set allowMultiMatch to true;
     * This interface cannot be used in the private deployment environment
     */
        getByLcscIds(        /** Lichuang C number */
        lcscIds: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Whether a single C-number is allowed to match multiple results */
        allowMultiMatch: T): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;
        /**
         * (BETA) Bulk acquisition of devices using License C number
         * @see pro-api.lib_device.getbylcscids_1.html
         */
    /**
     * List of searched device properties
     * By default, if multiple devices with the same C number are matched within the same library, only the first result will be returned;
     * If you want to return multiple results, set allowMultiMatch to true;
     * This interface cannot be used in the private deployment environment
     */
        getByLcscIds(        /** Lichuang C numbered array */
        lcscIds: Array<string>,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Whether a single C-number is allowed to match multiple results */
        allowMultiMatch: boolean): Promise<Array<ILIB_DeviceSearchItem>>;
        /**
         * (BETA) Modify the device
         * @see pro-api.lib_device.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** Device UUID */
        deviceUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Device Name */
        deviceName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Associate symbols, encapsulations, images */
        association: { symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string | null; footprint?: { uuid: string; libraryUuid: string; } | null; model3D?: { uuid: string; libraryUuid: string; } | null; imageData?: File | Blob | null; },         /** (Optional) Description */
        description: string | null,         /** (Optional) Other parameters */
        property: { name?: string | null; designator?: string; addIntoBom?: boolean; addIntoPcb?: boolean; net?: string; manufacturer?: string | null; manufacturerId?: string | null; supplier?: string | null; supplierId?: string | null; otherProperty?: { [key: string]: boolean | number | string | undefined | null; }; }): Promise<boolean>;
        /**
         * (BETA) Search Devices
         * @see pro-api.lib_device.search.html
         */
    /** List of searched device properties */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /**
         * (Optional) symbol type, default to all
         * @see pro-api.elib_symboltype.html
         */
        symbolType: ELIB_SymbolType,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_DeviceSearchItem>>;
    }
    /**
     * Integrated Library / Symbol Class
     * @see ./pro-api.lib_symbol.html
     */
    /** Signature: export declare class LIB_Symbol */
    class LIB_Symbol {
        /**
         * (BETA) Copy symbols
         * @see pro-api.lib_symbol.copy.html
         */
    /** UUID of new symbols in the target library */
        copy(        /** Symbol UUID */
        symbolUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New symbol name. If there is a duplicate symbol in the target library, it will cause copying to fail. */
        newSymbolName: string): Promise<string | undefined>;
        /**
         * (BETA) Create symbols
         * @see pro-api.lib_symbol.create.html
         */
    /** Symbol UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Symbol name */
        symbolName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /**
         * (Optional) Symbol Type
         * @see pro-api.elib_symboltype.html
         */
        symbolType: ELIB_SymbolType,         /** (Optional) Description */
        description: string): Promise<string | undefined>;
        /**
         * (BETA) Delete symbols
         * @see pro-api.lib_symbol.delete.html
         */
    /** Is the operation successful? */
        delete(        /** Symbol UUID */
        symbolUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all attributes of a symbol
         * @see pro-api.lib_symbol.get.html
         */
    /** Symbol properties */
        get(        /** Symbol UUID */
        symbolUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_SymbolItem | undefined>;
        /**
         * (BETA) Modify symbols
         * @see pro-api.lib_symbol.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** Symbol UUID */
        symbolUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Symbol Name */
        symbolName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Description */
        description: string | null): Promise<boolean>;
        /**
         * (BETA) Open a document in the editor
         * @see pro-api.lib_symbol.openineditor.html
         */
    /** Tag page ID, corresponding to IDMT_EditorTabItem.tabId, you can use DMT_EditorControl.getSplitScreenIdByTabId() to obtain the split screen ID */
        openInEditor(        /** Symbol UUID */
        symbolUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) Split Screen ID. If you do not fill in, it will be opened in the split screen where the focus is entered by default. You can use the interface in DMT_EditorControl to obtain it.
         * @see pro-api.dmt_editorcontrol.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Search Symbols
         * @see pro-api.lib_symbol.search.html
         */
    /** Searched symbol attribute list */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /**
         * (Optional) symbol type, default to all
         * @see pro-api.elib_symboltype.html
         */
        symbolType: ELIB_SymbolType,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_SymbolSearchItem>>;
        /**
         * (BETA) Update the document source code of symbols
         * @see pro-api.lib_symbol.updatedocumentsource.html
         */
    /** Whether the update was successful */
        updateDocumentSource(        /** Symbol UUID */
        symbolUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Document source code */
        documentSource: string): Promise<boolean | undefined>;
    }
    /**
     * Integrated Library / Footprint Class
     * @see ./pro-api.lib_footprint.html
     */
    /** Signature: export declare class LIB_Footprint */
    class LIB_Footprint {
        /**
         * (BETA) Copy Package
         * @see pro-api.lib_footprint.copy.html
         */
    /** Newly encapsulated UUID in the target library */
        copy(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New encapsulation name. If there is a duplicate encapsulation in the target library, it will cause replication failure */
        newFootprintName: string): Promise<string | undefined>;
        /**
         * (BETA) Create a package
         * @see pro-api.lib_footprint.create.html
         */
    /** Encapsulation UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Encapsulation name */
        footprintName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Description */
        description: string): Promise<string | undefined>;
        /**
         * (BETA) Remove Encapsulation
         * @see pro-api.lib_footprint.delete.html
         */
    /** Is the operation successful? */
        delete(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all properties of the encapsulated
         * @see pro-api.lib_footprint.get.html
         */
    /** Encapsulation properties */
        get(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_FootprintItem | undefined>;
        /**
         * (BETA) Modify the package
         * @see pro-api.lib_footprint.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Encapsulation name */
        footprintName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Description */
        description: string | null): Promise<boolean>;
        /**
         * (BETA) Open a document in the editor
         * @see pro-api.lib_footprint.openineditor.html
         */
    /** Tag page ID, corresponding to IDMT_EditorTabItem.tabId, you can use DMT_EditorControl.getSplitScreenIdByTabId() to obtain the split screen ID */
        openInEditor(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) Split Screen ID. If you do not fill in, it will be opened in the split screen where the focus is entered by default. You can use the interface in DMT_EditorControl to obtain it.
         * @see pro-api.dmt_editorcontrol.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Search Package
         * @see pro-api.lib_footprint.search.html
         */
    /** Searched encapsulation attribute list */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_FootprintSearchItem>>;
        /**
         * (BETA) Update the encapsulated document source code
         * @see pro-api.lib_footprint.updatedocumentsource.html
         */
    /** Whether the update was successful */
        updateDocumentSource(        /** Encapsulation UUID */
        footprintUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Document source code */
        documentSource: string): Promise<boolean | undefined>;
    }
    /**
     * Integrated Library / 3D Model Class
     * @see ./pro-api.lib_3dmodel.html
     */
    /** Signature: export declare class LIB_3DModel */
    class LIB_3DModel {
        /**
         * (BETA) Copy 3D Model
         * @see pro-api.lib_3dmodel.copy.html
         */
    /** UUID of new 3D models in the target library */
        copy(        /** 3D Model UUID */
        modelUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New 3D model name. If there is a duplicate name in the target library, the copying will fail */
        newModelName: string): Promise<string | undefined>;
        /**
         * (BETA) Create 3D models
         * @see pro-api.lib_3dmodel.create.html
         */
    /** 3D Model UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** 3D model file data */
        modelFile: Blob,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /**
         * (Optional)
         * @see pro-api.esys_unit.html
         */
        unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>;
        /**
         * (BETA) Delete 3D Models
         * @see pro-api.lib_3dmodel.delete.html
         */
    /** Is the operation successful? */
        delete(        /** 3D Model UUID */
        modelUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all properties of a 3D model
         * @see pro-api.lib_3dmodel.get.html
         */
    /** 3D Model Properties */
        get(        /** 3D Model UUID */
        modelUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_3DModelItem | undefined>;
        /**
         * (BETA) Modify 3D Models
         * @see pro-api.lib_3dmodel.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** 3D Model UUID */
        modelUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) 3D model name */
        modelName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Description */
        description: string | null): Promise<boolean>;
        /**
         * (BETA) Search for 3D Models
         * @see pro-api.lib_3dmodel.search.html
         */
    /** Searched list of 3D model attributes */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_3DModelSearchItem>>;
    }
    /**
     * Integrated Library / Panel Library Class
     * @see ./pro-api.lib_panellibrary.html
     */
    /** Signature: export declare class LIB_PanelLibrary */
    class LIB_PanelLibrary {
        /**
         * (BETA) Copy Panel Library
         * @see pro-api.lib_panellibrary.copy.html
         */
    /** UUID of the new panel library in the target library */
        copy(        /** Panel Library UUID */
        panelLibraryUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New panel library name. If there is a duplicate panel library in the target library, it will cause copying to fail. */
        newPanelLibraryName: string): Promise<string | undefined>;
        /**
         * (BETA) Create a panel library
         * @see pro-api.lib_panellibrary.create.html
         */
    /** Panel Library UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Panel library name */
        panelLibraryName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Description */
        description: string): Promise<string | undefined>;
        /**
         * (BETA) Delete the panel library
         * @see pro-api.lib_panellibrary.delete.html
         */
    /** Is the operation successful? */
        delete(        /** Panel Library UUID */
        panelLibraryUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all properties of the panel library
         * @see pro-api.lib_panellibrary.get.html
         */
    /** Panel library properties */
        get(        /** Panel Library UUID */
        panelLibraryUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_PanelLibraryItem | undefined>;
        /**
         * (BETA) Modify the panel library
         * @see pro-api.lib_panellibrary.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** Panel Library UUID */
        panelLibraryUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Panel Library Name */
        panelLibraryName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Description */
        description: string | null): Promise<boolean>;
        /**
         * (BETA) Open a document in the editor
         * @see pro-api.lib_panellibrary.openineditor.html
         */
    /** Tag page ID, corresponding to IDMT_EditorTabItem.tabId, you can use DMT_EditorControl.getSplitScreenIdByTabId() to obtain the split screen ID */
        openInEditor(        /** Panel Library UUID */
        panelLibraryUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) Split Screen ID. If you do not fill in, it will be opened in the split screen where the focus is entered by default. You can use the interface in DMT_EditorControl to obtain it.
         * @see pro-api.dmt_editorcontrol.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Search Panel Library
         * @see pro-api.lib_panellibrary.search.html
         */
    /** Searched Panel Library Properties List */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_PanelLibrarySearchItem>>;
    }
    /**
     * Integrated Library / Reusable Module Class
     * @see ./pro-api.lib_cbb.html
     */
    /** Signature: export declare class LIB_Cbb */
    class LIB_Cbb {
        /**
         * (BETA) Replication Reuse Module
         * @see pro-api.lib_cbb.copy.html
         */
    /** UUID of new multiplexed modules in the target library */
        copy(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Target library UUID */
        targetLibraryUuid: string,         /**
         * (Optional) Classification in the target library
         * @see pro-api.ilib_classificationindex.html
         */
        targetClassification: ILIB_ClassificationIndex,         /** (Optional) New multiplexing module name. If there is a duplicate module in the target library, it will cause replication failure */
        newCbbName: string): Promise<string | undefined>;
        /**
         * (BETA) Create multiplexed modules
         * @see pro-api.lib_cbb.create.html
         */
    /** Multiplexing module UUID */
        create(        /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** Multiplex module name */
        cbbName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Description */
        description: string): Promise<string | undefined>;
        /**
         * (BETA) Delete multiplexed modules
         * @see pro-api.lib_cbb.delete.html
         */
    /** Is the operation successful? */
        delete(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Gets all properties of the multiplexed module
         * @see pro-api.lib_cbb.get.html
         */
    /** Multiplex module properties */
        get(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * (Optional) library UUID, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<ILIB_CbbItem | undefined>;
        /**
         * (BETA) Modify multiplexed modules
         * @see pro-api.lib_cbb.modify.html
         */
    /**
     * Is the operation successful?
     * If you want to clear some properties, set their value to null
     */
        modify(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /** (Optional) Multiplex module name */
        cbbName: string,         /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex | null,         /** (Optional) Description */
        description: string | null): Promise<boolean>;
        /**
         * (BETA) Open the multiplexed module project in the editor
         * @see pro-api.lib_cbb.openprojectineditor.html
         */
    /** This operation will open the module project on the EDA front end. If other projects have been opened and there are unsaved changes, performing this operation will directly lose all unsaved data. */
        openProjectInEditor(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string): Promise<boolean>;
        /**
         * (BETA) Open multiplexed module symbols in the editor
         * @see pro-api.lib_cbb.opensymbolineditor.html
         */
    /** Tag page ID, corresponding to IDMT_EditorTabItem.tabId, you can use DMT_EditorControl.getSplitScreenIdByTabId() to obtain the split screen ID */
        openSymbolInEditor(        /** Multiplexing module UUID */
        cbbUuid: string,         /**
         * Library UUID can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) Split Screen ID. If you do not fill in, it will be opened in the split screen where the focus is entered by default. You can use the interface in DMT_EditorControl to obtain it.
         * @see pro-api.dmt_editorcontrol.html
         */
        splitScreenId: string): Promise<string | undefined>;
        /**
         * (BETA) Search multiplexing module
         * @see pro-api.lib_cbb.search.html
         */
    /** Searched multiplexed module attribute list */
        search(        /** Search for keywords */
        key: string,         /**
         * (Optional) library UUID, defaults to system library, can be obtained using the interface in LIB_LibrariesList
         * @see pro-api.lib_librarieslist.html
         */
        libraryUuid: string,         /**
         * (Optional) category, default to all
         * @see pro-api.ilib_classificationindex.html
         */
        classification: ILIB_ClassificationIndex,         /** (Optional) Number of search results for one page */
        itemsOfPage: number,         /** (Optional) Page number */
        page: number): Promise<Array<ILIB_CbbSearchItem>>;
    }
    /**
     * 3D Model Properties
     * @see ./pro-api.ilib_3dmodelitem.html
     */
    /** Signature: export interface ILIB_3DModelItem */
    interface ILIB_3DModelItem {
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_3dmodelitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.MODEL;
        /**
         * Library UUID
         * @see pro-api.ilib_3dmodelitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * 3D model name
         * @see pro-api.ilib_3dmodelitem.name.html
         */
        name: string;
        /**
         * 3D Model UUID
         * @see pro-api.ilib_3dmodelitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Searched 3D Model Properties
     * @see ./pro-api.ilib_3dmodelsearchitem.html
     */
    /** Signature: export interface ILIB_3DModelSearchItem */
    interface ILIB_3DModelSearchItem {
        /**
         * Attribution
         * @see pro-api.ilib_3dmodelsearchitem.ascription.html
         */
        ascription: string;
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_3dmodelsearchitem.description.html
         */
        description?: string;
        /**
         * Previous modified
         * @see pro-api.ilib_3dmodelsearchitem.lastmodifiedby.html
         */
        lastModifiedBy: string;
        /**
         * Library UUID
         * @see pro-api.ilib_3dmodelsearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * 3D model name
         * @see pro-api.ilib_3dmodelsearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_3dmodelsearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * Update time stamp
         * @see pro-api.ilib_3dmodelsearchitem.updatetimestamp.html
         */
        updateTimestamp: number;
        /**
         * 3D Model UUID
         * @see pro-api.ilib_3dmodelsearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Reusable Module Properties
     * @see ./pro-api.ilib_cbbitem.html
     */
    /** Signature: export interface ILIB_CbbItem */
    interface ILIB_CbbItem {
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_cbbitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.CBB;
        /**
         * Library UUID
         * @see pro-api.ilib_cbbitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Multiplex module name
         * @see pro-api.ilib_cbbitem.name.html
         */
        name: string;
        /**
         * Multiplexing module UUID
         * @see pro-api.ilib_cbbitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Searched reusable module properties
     * @see ./pro-api.ilib_cbbsearchitem.html
     */
    /** Signature: export interface ILIB_CbbSearchItem */
    interface ILIB_CbbSearchItem {
        /**
         * Attribution
         * @see pro-api.ilib_cbbsearchitem.ascription.html
         */
        ascription: string;
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_cbbsearchitem.description.html
         */
        description?: string;
        /**
         * Previous modified
         * @see pro-api.ilib_cbbsearchitem.lastmodifiedby.html
         */
        lastModifiedBy: string;
        /**
         * Library UUID
         * @see pro-api.ilib_cbbsearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Multiplex module name
         * @see pro-api.ilib_cbbsearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_cbbsearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * Update time stamp
         * @see pro-api.ilib_cbbsearchitem.updatetimestamp.html
         */
        updateTimestamp: number;
        /**
         * Multiplexing module UUID
         * @see pro-api.ilib_cbbsearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Classification index
     * @see ./pro-api.ilib_classificationindex.html
     */
    /** Remark: This classification index is used to index the classification in the library, where the library UUID and library types are only used for identification purposes for this index, preventing the indexes in different libraries from referring to each other and causing errors. */
    /** Signature: export interface ILIB_ClassificationIndex */
    interface ILIB_ClassificationIndex {
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        libraryType: ELIB_LibraryType;
        /**
         * Library UUID
         * @see pro-api.ilib_classificationindex.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Level 1 classification UUID
         * @see pro-api.ilib_classificationindex.primaryclassificationuuid.html
         */
        primaryClassificationUuid: string;
        /**
         * (Optional) Secondary Classification UUID
         * @see pro-api.ilib_classificationindex.secondaryclassificationuuid.html
         */
        secondaryClassificationUuid?: string;
    }
    /**
     * Device properties
     * @see ./pro-api.ilib_deviceitem.html
     */
    /** Signature: export interface ILIB_DeviceItem */
    interface ILIB_DeviceItem {
        /**
         * Related
         * @see pro-api.ilib_deviceassociationitem.html
         */
        association: ILIB_DeviceAssociationItem;
        /**
         * (Optional) Device Classification
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_deviceitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.DEVICE;
        /**
         * Library UUID
         * @see pro-api.ilib_deviceitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Device name
         * @see pro-api.ilib_deviceitem.name.html
         */
        name: string;
        /**
         * Extended properties
         * @see pro-api.ilib_deviceextendpropertyitem.html
         */
        property: ILIB_DeviceExtendPropertyItem;
        /**
         * Device UUID
         * @see pro-api.ilib_deviceitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Device-associated symbol and footprint properties
     * @see ./pro-api.ilib_deviceassociationitem.html
     */
    /** Signature: export interface ILIB_DeviceAssociationItem */
    interface ILIB_DeviceAssociationItem {
        /**
         * (Optional) Package
         * @see pro-api.ilib_deviceassociationitem.footprint.html
         */
        footprint?: { uuid: string; libraryUuid: string; };
        /**
         * Encapsulation UUID
         * @see pro-api.ilib_deviceassociationitem.footprintuuid.html
         */
        footprintUuid: string;
        /**
         * (Optional)
         * @see pro-api.ilib_deviceassociationitem.images.html
         */
        images?: Array<string>;
        /**
         * symbol
         * @see pro-api.elib_symboltype.html
         */
        symbol: { type: ELIB_SymbolType; uuid: string; libraryUuid: string; };
        /**
         * Symbol Type
         * @see pro-api.elib_symboltype.html
         */
        symbolType: ELIB_SymbolType;
        /**
         * Symbol UUID
         * @see pro-api.ilib_deviceassociationitem.symboluuid.html
         */
        symbolUuid: string;
    }
    /**
     * Device extended properties
     * @see ./pro-api.ilib_deviceextendpropertyitem.html
     */
    /** Signature: export interface ILIB_DeviceExtendPropertyItem */
    interface ILIB_DeviceExtendPropertyItem {
        /**
         * (Optional) Join BOM
         * @see pro-api.ilib_deviceextendpropertyitem.addintobom.html
         */
        addIntoBom?: boolean;
        /**
         * (Optional) Go to PCB
         * @see pro-api.ilib_deviceextendpropertyitem.addintopcb.html
         */
        addIntoPcb?: boolean;
        /**
         * (Optional) bit number
         * @see pro-api.ilib_deviceextendpropertyitem.designator.html
         */
        designator?: string;
        /**
         * (Optional) Manufacturer
         * @see pro-api.ilib_deviceextendpropertyitem.manufacturer.html
         */
        manufacturer?: string;
        /**
         * (Optional) Manufacturer number
         * @see pro-api.ilib_deviceextendpropertyitem.manufacturerid.html
         */
        manufacturerId?: string;
        /**
         * (Optional) Name
         * @see pro-api.ilib_deviceextendpropertyitem.name.html
         */
        name?: string;
        /**
         * (Optional) Network
         * @see pro-api.ilib_deviceextendpropertyitem.net.html
         */
        net?: string;
        /**
         * (Optional) Other parameters
         * @see pro-api.ilib_deviceextendpropertyitem.otherproperty.html
         */
        otherProperty?: { [key: string]: boolean | number | string | undefined; };
        /**
         * (Optional) Supplier
         * @see pro-api.ilib_deviceextendpropertyitem.supplier.html
         */
        supplier?: string;
        /**
         * (Optional) Supplier number
         * @see pro-api.ilib_deviceextendpropertyitem.supplierid.html
         */
        supplierId?: string;
    }
    /**
     * Searched device properties
     * @see ./pro-api.ilib_devicesearchitem.html
     */
    /** Signature: export interface ILIB_DeviceSearchItem */
    interface ILIB_DeviceSearchItem {
        /**
         * (Optional) Device Classification
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_devicesearchitem.description.html
         */
        description?: string;
        /**
         * (Optional) Associative Encapsulation
         * @see pro-api.ilib_devicesearchitem.footprint.html
         */
        footprint?: { name: string; uuid: string; libraryUuid: string; };
        /**
         * (Optional) Associated encapsulation name
         * @see pro-api.ilib_devicesearchitem.footprintname.html
         */
        footprintName?: string;
        /**
         * Associated Encapsulation UUID
         * @see pro-api.ilib_devicesearchitem.footprintuuid.html
         */
        footprintUuid: string;
        /**
         * (Optional) Related Image UUID
         * @see pro-api.ilib_devicesearchitem.imageuuid.html
         */
        imageUuid?: string;
        /**
         * (Optional) JialiChuang Inventory
         * @see pro-api.ilib_devicesearchitem.jlcinventory.html
         */
        jlcInventory?: number;
        /**
         * (Optional) Jiali Chuangku Category
         * @see pro-api.elib_devicejlclibrarycategory.html
         */
        jlcLibraryCategory?: ELIB_DeviceJlcLibraryCategory;
        /**
         * (Optional) Jialichuang Price
         * @see pro-api.ilib_devicesearchitem.jlcprice.html
         */
        jlcPrice?: number;
        /**
         * (Optional) Lichuang Mall Inventory
         * @see pro-api.ilib_devicesearchitem.lcscinventory.html
         */
        lcscInventory?: number;
        /**
         * (Optional) Lichuang Mall Price
         * @see pro-api.ilib_devicesearchitem.lcscprice.html
         */
        lcscPrice?: number;
        /**
         * Library UUID
         * @see pro-api.ilib_devicesearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * (Optional) Manufacturer
         * @see pro-api.ilib_devicesearchitem.manufacturer.html
         */
        manufacturer?: string;
        /**
         * (Optional) Manufacturer number
         * @see pro-api.ilib_devicesearchitem.manufacturerid.html
         */
        manufacturerId?: string;
        /**
         * (Optional) Associate 3D Model
         * @see pro-api.ilib_devicesearchitem.model3d.html
         */
        model3D?: { name: string; uuid: string; libraryUuid: string; };
        /**
         * (Optional) Associate 3D model name
         * @see pro-api.ilib_devicesearchitem.model3dname.html
         */
        model3DName?: string;
        /**
         * Associate 3D Model UUID
         * @see pro-api.ilib_devicesearchitem.model3duuid.html
         */
        model3DUuid: string;
        /**
         * Device name
         * @see pro-api.ilib_devicesearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_devicesearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * (Optional) Supplier
         * @see pro-api.ilib_devicesearchitem.supplier.html
         */
        supplier?: string;
        /**
         * (Optional) Supplier number
         * @see pro-api.ilib_devicesearchitem.supplierid.html
         */
        supplierId?: string;
        /**
         * Related symbols
         * @see pro-api.ilib_devicesearchitem.symbol.html
         */
        symbol: { name: string; uuid: string; libraryUuid: string; };
        /**
         * Associated symbol name
         * @see pro-api.ilib_devicesearchitem.symbolname.html
         */
        symbolName: string;
        /**
         * Associative symbol UUID
         * @see pro-api.ilib_devicesearchitem.symboluuid.html
         */
        symbolUuid: string;
        /**
         * Device UUID
         * @see pro-api.ilib_devicesearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Footprint properties
     * @see ./pro-api.ilib_footprintitem.html
     */
    /** Signature: export interface ILIB_FootprintItem */
    interface ILIB_FootprintItem {
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_footprintitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.FOOTPRINT;
        /**
         * Library UUID
         * @see pro-api.ilib_footprintitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Encapsulation name
         * @see pro-api.ilib_footprintitem.name.html
         */
        name: string;
        /**
         * Encapsulation UUID
         * @see pro-api.ilib_footprintitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Searched footprint properties
     * @see ./pro-api.ilib_footprintsearchitem.html
     */
    /** Signature: export interface ILIB_FootprintSearchItem */
    interface ILIB_FootprintSearchItem {
        /**
         * Attribution
         * @see pro-api.ilib_footprintsearchitem.ascription.html
         */
        ascription: string;
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_footprintsearchitem.description.html
         */
        description?: string;
        /**
         * Previous modified
         * @see pro-api.ilib_footprintsearchitem.lastmodifiedby.html
         */
        lastModifiedBy: string;
        /**
         * Library UUID
         * @see pro-api.ilib_footprintsearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Encapsulation name
         * @see pro-api.ilib_footprintsearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_footprintsearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * Update time stamp
         * @see pro-api.ilib_footprintsearchitem.updatetimestamp.html
         */
        updateTimestamp: number;
        /**
         * Encapsulation UUID
         * @see pro-api.ilib_footprintsearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Library information
     * @see ./pro-api.ilib_libraryinfo.html
     */
    /** Remark: Contains the name of the library and its UUID */
    /** Signature: export interface ILIB_LibraryInfo */
    interface ILIB_LibraryInfo {
        /**
         * Library name
         * @see pro-api.ilib_libraryinfo.name.html
         */
        name: string;
        /**
         * Library UUID
         * @see pro-api.ilib_libraryinfo.uuid.html
         */
        uuid: string;
    }
    /**
     * Panel library properties
     * @see ./pro-api.ilib_panellibraryitem.html
     */
    /** Signature: export interface ILIB_PanelLibraryItem */
    interface ILIB_PanelLibraryItem {
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_panellibraryitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.PANEL_LIBRARY;
        /**
         * Library UUID
         * @see pro-api.ilib_panellibraryitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Panel library name
         * @see pro-api.ilib_panellibraryitem.name.html
         */
        name: string;
        /**
         * Panel Library UUID
         * @see pro-api.ilib_panellibraryitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Searched panel library properties
     * @see ./pro-api.ilib_panellibrarysearchitem.html
     */
    /** Signature: export interface ILIB_PanelLibrarySearchItem */
    interface ILIB_PanelLibrarySearchItem {
        /**
         * Attribution
         * @see pro-api.ilib_panellibrarysearchitem.ascription.html
         */
        ascription: string;
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_panellibrarysearchitem.description.html
         */
        description?: string;
        /**
         * Previous modified
         * @see pro-api.ilib_panellibrarysearchitem.lastmodifiedby.html
         */
        lastModifiedBy: string;
        /**
         * Library UUID
         * @see pro-api.ilib_panellibrarysearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Panel library name
         * @see pro-api.ilib_panellibrarysearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_panellibrarysearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * Update time stamp
         * @see pro-api.ilib_panellibrarysearchitem.updatetimestamp.html
         */
        updateTimestamp: number;
        /**
         * Panel Library UUID
         * @see pro-api.ilib_panellibrarysearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Symbol properties
     * @see ./pro-api.ilib_symbolitem.html
     */
    /** Signature: export interface ILIB_SymbolItem */
    interface ILIB_SymbolItem {
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_symbolitem.description.html
         */
        description?: string;
        /**
         * Library Type
         * @see pro-api.elib_librarytype.html
         */
        readonly libraryType: ELIB_LibraryType.SYMBOL;
        /**
         * Library UUID
         * @see pro-api.ilib_symbolitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Symbol name
         * @see pro-api.ilib_symbolitem.name.html
         */
        name: string;
        /**
         * Symbol Type
         * @see pro-api.elib_symboltype.html
         */
        type: ELIB_SymbolType;
        /**
         * Symbol UUID
         * @see pro-api.ilib_symbolitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Searched symbol properties
     * @see ./pro-api.ilib_symbolsearchitem.html
     */
    /** Signature: export interface ILIB_SymbolSearchItem */
    interface ILIB_SymbolSearchItem {
        /**
         * Attribution
         * @see pro-api.ilib_symbolsearchitem.ascription.html
         */
        ascription: string;
        /**
         * (Optional) Category
         * @see pro-api.ilib_classificationindex.html
         */
        classification?: ILIB_ClassificationIndex;
        /**
         * (Optional) Description
         * @see pro-api.ilib_symbolsearchitem.description.html
         */
        description?: string;
        /**
         * Previous modified
         * @see pro-api.ilib_symbolsearchitem.lastmodifiedby.html
         */
        lastModifiedBy: string;
        /**
         * Library UUID
         * @see pro-api.ilib_symbolsearchitem.libraryuuid.html
         */
        libraryUuid: string;
        /**
         * Symbol name
         * @see pro-api.ilib_symbolsearchitem.name.html
         */
        name: string;
        /**
         * Sort
         * @see pro-api.ilib_symbolsearchitem.ordinal.html
         */
        ordinal: number;
        /**
         * Symbol Type
         * @see pro-api.elib_symboltype.html
         */
        type: ELIB_SymbolType;
        /**
         * Update time stamp
         * @see pro-api.ilib_symbolsearchitem.updatetimestamp.html
         */
        updateTimestamp: number;
        /**
         * Symbol UUID
         * @see pro-api.ilib_symbolsearchitem.uuid.html
         */
        uuid: string;
    }
    /**
     * Integrated Library Type
     * @see ./pro-api.elib_librarytype.html
     */
    /** Signature: export declare enum ELIB_LibraryType */
    enum ELIB_LibraryType {
        /** Multiplexing module */
        CBB = "1",
        /** Devices */
        DEVICE = "3",
        /** Package */
        FOOTPRINT = "4",
        /** 3D Model */
        MODEL = "5",
        /** Panel library */
        PANEL_LIBRARY = "29",
        /** symbol */
        SYMBOL = "2",
    }
    /**
     * JLC SMT Library Category
     * @see ./pro-api.elib_devicejlclibrarycategory.html
     */
    /** Signature: export declare enum ELIB_DeviceJlcLibraryCategory */
    enum ELIB_DeviceJlcLibraryCategory {
        /** Extended library */
        EXTEND = "extend",
        /** Basic library */
        STANDARD = "standard",
    }
    /**
     * Symbol Type
     * @see ./pro-api.elib_symboltype.html
     */
    /** Signature: export declare enum ELIB_SymbolType */
    enum ELIB_SymbolType {
        /** element */
        COMPONENT = 2,
        /** drawing */
        DRAWING = 20,
        /** Network Identification */
        NET_FLAG = 18,
        /** Network port */
        NET_PORT = 19,
        /** No electricity */
        NON_ELECTRICAL = 21,
        /** Short-circuit logo */
        SHORT_CIRCUIT_FLAG = 22,
    }
}
