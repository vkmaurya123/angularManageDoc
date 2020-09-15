
export interface manageDocModuleApis {
    documentsForGridView : string;
    createDocument : string;
    updateDocument : string;
    deleteDocument : string;
    parentDocumentForSequenceUpdate : string;
    childDocumentForUpdateSequence : string;
    childDocumentSequence : string;
    parentDocumentSequence : string;
    parentDocumentWithAllChildViewOnEnumList : string;
}

export interface docTileViewAndDocListNavApis { 
    documentsForPage : string;
}


export interface selectedDocApis {
    selectedDocView : string;
}