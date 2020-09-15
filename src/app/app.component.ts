import { Component } from '@angular/core';
import { ApiUrls } from './apiUrl';
import { manageDocModuleApis,   } from './apiUrlsInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  public apiUrlForManageDoc : manageDocModuleApis = {
    documentsForGridView : ApiUrls.getDocumentsForGridView,
    createDocument : ApiUrls.createDocument,
    updateDocument : ApiUrls.updateDocumentContent,
    deleteDocument : ApiUrls.deleteDocument,
    parentDocumentForSequenceUpdate : ApiUrls.getStaticParentDocumentForSequenceUpdate,
    childDocumentForUpdateSequence : ApiUrls.getChildDocumentForUpdateSequence,
    childDocumentSequence : ApiUrls.updateChildDocumentSequence,
    parentDocumentSequence : ApiUrls.updateParentDocumentSequence,
    parentDocumentWithAllChildViewOnEnumList : ApiUrls.getAllParentDocumentWithAllChildOnViewOnEnumList
   }


  public styleConfig = { }
}
