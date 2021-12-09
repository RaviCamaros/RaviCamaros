
var R_aeRender = new Object();

R_aeRender = {

    productname: "R_aerender",
    version: "v3",

    prefLoad: function() {
      var R_aebatConfFile = new File(R_aebatConfPath);
      if (R_aebatConfFile.exists) {
        R_aebatConfFile.open("r");
        eval(R_aebatConfFile.read());
        R_aebatConfFile.close();
      } else {

      }
    },

    chk_aerenderCmdPath: function(cmdPath) {
      if (!cmdPath.exists) {
        alert(cmdPath.fsName + "doesn't exist.");
        return false;
      } else {
        return true;
      }
    },

    chkJPN: function() {
      if (app.language == 1613) {
        return true;
      } else {
        return false;
      }
    },


    chkfileEncoding: function() {
      if ($.os.match("Win")) {
        myEncoding = "CP932";
      } else if ($.os.match("Win")) {
      
      }
      return myEncoding;
    },

    chkRQueue: function(alrt) {
      var qIndex = 0;
      var qArray = new Array();
      var noQ = "Render Queue Select kro... \n Dhanyawad...!";
      var qQ = app.project.renderQueue.numItems;

      if (qQ >= 1) {
        for (var i = 1; i <= qQ; i++) {
          var cQ = app.project.renderQueue.items[i];
          if (cQ.status == RQItemStatus.QUEUED) {
            qArray[qIndex] = cQ.comp;
            qIndex = qIndex + 1;
          }
        }
      }
      if (qIndex < 1) {
        if (alrt == true) {
          alert(noQ);
        }
        qCheck = false;
        return null;
      } else {
        qCheck = true;
        return qArray;
      }
    },

   
    

    MainGUI: function() {
      var R_aebat_scriptname = this.productname;
      var R_aebat_ver = this.version;
      var R_aebat_copyright = "Copyright (c) 2021 \n";
      var ALERT_save_once = "Save Karlo project.";
      var ALERT_save_overwrite = "Save Karlo project : Overwrite Krna hy ?";
      var R_aebatFile = app.project.file;
 
      var R_aebatConf = "R_aebatExport.conf";
      var aeStartUpFolder = Folder.startup;
      var aerenderCmdName = "aerender";

      var aerenderFolderPath, aebatExtension, aerenderCmdPath, aerenderCmd, aebatPathFlag, R_aebatExportFolder;

      //GUI
      
     
        if ($.os.match("Win")) {
        aerenderFolderPath = aeStartUpFolder;
        aerenderCmdPath = aerenderFolderPath.fsName;
        aerenderCmdName = aerenderCmdName + ".exe";
        aebatExtension = ".bat";

       } else {
        alert("Not supported");
        return;
      }

      aerenderCmd = new File(aerenderFolderPath.fsName + "/" + aerenderCmdName);
      aebatPathFlag = this.chk_aerenderCmdPath(aerenderCmd);
//=====================================================================================

    var mainWindow = new Window("palette", "R_renderer", undefined, {resizeable:true});
    mainWindow.orientation = "column";
//----------------------------------------------------
var panelOne = mainWindow.add("panel", undefined, "Render Queue");
panelOne.orientation = "column";

var panelOneGroupOne = panelOne.add("group", undefined, "panelThreeGroupOne");
panelOneGroupOne.orientation = "row";
panelOneGroupOne.add("statictext", undefined, "seeds number");
//var seednum = panelOneGroupOne.add("edittext", undefined, "1");
var typeDropDown = panelOneGroupOne.add("dropdownlist", undefined, ["1", "2", "3"]);
typeDropDown.selection = 0;



var panelOneGroupTwo = panelOne.add("group", undefined, "panelThreeGroupTwo");
panelOneGroupTwo.orientation = "row";
panelOneGroupTwo.add("statictext", undefined, "Render command:");

var buttonDefault = panelOneGroupTwo.add("button", undefined, "Default");

buttonDefault.onClick = function(){
         
         rendercommand();
    
    }

 aerenderPathId = Folder.startup.fsName;
 

var rendercommand = panelOneGroupTwo.add("edittext", undefined, aerenderPathId + "\r\n\naerender");




//----------------------------------------------------////////////////////////////////////////////////---------------------------------------------------------------------//

var panelThree = mainWindow.add("panel", undefined, "");
panelThree.orientation = "column";
var panelThreeGroupOne = panelThree.add("group", undefined, "panelThreeGroupOne");
panelThreeGroupOne.orientation = "row";
var buttonScript = panelThreeGroupOne.add("button", undefined, "Script");

//var cmdcmd = panelThree.add("statictext", undefined, "cd " +rendercommand.text+"-project "+app.project.file.fsName, {multiline:true}, {resizeable:true});

buttonScript.onClick = function Render()
{
	
    var win = new Window("palette", "CMD Script", undefined, {resizeable:true}); 
  //  var items = app.project.items;
    
  //  for (var i = 1; i <= items.length; i++) 
  //  {
       
        Pnl = win.add('panel',undefined, 'Manually CMD Copy Past Script');
        tmp_text = Pnl.add("edittext", undefined, "cd " + rendercommand.text +" -project "+app.project.file.fsName, {multiline:true}, {resizeable:true});
 
        win.show();

        function load_settings() 
        {
            settings_file.close();
        }

   // }
} 
 
    


//----------------------------------------------------

var panelGroupTwo = mainWindow.add("group", undefined, "panelTwo");
panelGroupTwo.orientation="row";

var panelTwo = mainWindow.add("panel", undefined, "");
panelTwo.orientation = "column";
var panelTwoGroupOne = panelTwo.add("group", undefined, "panelTwoGroupOne");
panelTwoGroupOne.orientation = "row";

//var buttonRender = panelTwoGroupOne.add("button", undefined, "Render");
//buttonRender.onclick = C_render

                     
                    
function C_render(){
        app.beginUndoGroup("Render");
        var loadData;
        //0==1
        //1==2
        //2==3
        
        switch(typeDropDown.selection.index){
            case 0:
                loadData = loadFile();
             break;
             case 1:
                loadData = loadFile();
             break;
             case 2:
                loadData = loadFile();
             break;
            
            }
        
        
 }


var buttonCancel = panelTwoGroupOne.add("button", undefined, "Cancel");

buttonCancel.onClick = function(){
        mainWindow.close();
    }


//-----------------------------------------////////////////////////////////------------------------------------------////////////////////////////////--------------------------------------------////////////////////////////////----------------------------//
 
      mainWindow.size = [600, 400];

 //  var panelGroupRender = mainWindow.add("group", undefined, "panelTwo");
   //  panelGroupRender.orientation="row"; 
   
    var panelGroupRenderMain = mainWindow.add("panel", undefined, "");
    panelGroupRenderMain.orientation = "row";
    
    var panelGroupRenderOne = panelGroupRenderMain.add("group", undefined, "panelGroupRender");
    //panelGroupRenderOne.orientation = "row";
    
     var panelGroupRender = panelGroupRenderMain.add("button", undefined, "Batch Render");
  //   panelGroupRender.orientation="row"; 
     
        var buttonCancel = panelGroupRenderMain.add("button", undefined, "save");
     
//     var panelGroupRender_save = panelGroupRender.add("button", undefined, "Save");
  
     
 

      buttonCancel.onClick = function() {
        var saveFlag, overWriteFlag = false;
        if (R_aeRender.chkRQueue(true) !== null) {
          if (app.project.file === null) {
            alert(ALERT_save_once);
            saveFlag = app.project.save();
          } else {
            overWriteFlag = confirm(ALERT_save_overwrite);
            if (overWriteFlag === true) {
              saveFlag = app.project.save();
            } else {
              saveFlag = app.project.saveWithDialog();
            }
          }

          if (saveFlag === true) {
            mprenderOption = '';
            var timestamp ;
            var me = (app.project.file.name).split(".aep");
            var folderName = me[0] + "_aereder";
            var aepFile = app.project.file;
            var fileName = folderName + '_' + aebatExtension;
            var aepDuplicatedFile, aepRenderFile;

            R_aebatExportFolder = R_aeRender.exportFolder(folderName);
            R_aebat_filePath = R_aebatExportFolder.fsName + "/" + fileName;
            aepDuplicatedFile = new File(R_aebatExportFolder.fsName + '/' + me[0] +'.aep')
            aepRenderFile = aepFile.copy(aepDuplicatedFile);

            //alert(aepRenderFile)
            if (aepRenderFile) {
              aebatFileText = R_aeRender.aebatMakeCommand(mprenderOption, aepDuplicatedFile);
               R_aeRender.batchFileExport(R_aebat_filePath, aebatFileText, false, ($.os.match("Mac")));
            } else {
              alert('Error: AEP file had not been duplicated.')
              return;
            }
          }
        }
      }


//--------------------++++++++++++++++++++++++++++++++++++++++++++++++++++-----------------------------------------------------------------------------------------------------------------------------------------


      panelGroupRender.onClick = function() {
          var saveFlag, overWriteFlag = false;
          if (R_aeRender.chkRQueue(true) !== null) {
            if (app.project.file === null) {
              alert(ALERT_save_once);
              saveFlag = app.project.save();
            } else {
              overWriteFlag = confirm(ALERT_save_overwrite);
              if (overWriteFlag === true) {
                saveFlag = app.project.save();
              } else {
                saveFlag = app.project.saveWithDialog();
              }
            }

            if (saveFlag === true) {
              mprenderOption = '';
              var timestamp ;
              var me = (app.project.file.name).split(".aep");
              var folderName = me[0] + "_aereder";
              var aepFile = app.project.file;
              var fileName = folderName + '_' + aebatExtension;
              var aepDuplicatedFile, aepRenderFile;

              R_aebatExportFolder = R_aeRender.exportFolder(folderName);
              R_aebat_filePath = R_aebatExportFolder.fsName + "/" + fileName;
              aepDuplicatedFile = new File(R_aebatExportFolder.fsName + '/' + me[0] + '_' + '.aep')
              aepRenderFile = aepFile.copy(aepDuplicatedFile);

              if (aepRenderFile) {
                aebatFileText = R_aeRender.aebatMakeCommand(mprenderOption, aepDuplicatedFile);
                R_aeRender.batchFileExport(R_aebat_filePath, aebatFileText, true, ($.os.match("Mac")));
              } else {
                alert('Error: AEP file had not been duplicated.')
                return
              }

            }
          }

          mainWindow.onMove = function() {
            if (parseFloat(app.version) < 7) {
              R_aebat_winLoc = [mainWindow.bounds[0], mainWindow.bounds[1]];
            } else {
              R_aebat_winLoc = mainWindow.location;
            }
          }
        }
        mainWindow.show();
      },

      exportFolder: function(name) {
        var parentFolder = new Folder(app.project.file.parent);
        var aeRenderFolderPath = parentFolder.fsName + '/' + name
        var aeRenderFolder = new Folder(aeRenderFolderPath);

        if (!aeRenderFolder.exists) {
          aeRenderFolder.create();
        }

        return aeRenderFolder

      },

        aebatMakeCommand: function(aep) {
          var R_aebatFile = aep;
              var cmdPath, R_aebat_targetFile, prefixLangCode, mp = '';
          var output;
         

    
           
            cmdPath = Folder.startup.fsName;
            R_aebat_targetFile = R_aebatFile.fsName;
            prefixLangCode = "";
            ($.locale == "ja_JP") ? (prefixLangCode = "chcp 932") : (prefixLangCode = "");
            output = "\n" + "\"aerender\" /W " + " " + "|" + "\"" + cmdPath + "\\" + "aerender.exe\"" + " " + " " + "-project " + "\"" + app.project.file.fsName + "\"";

          
          //alert(output);
          return output;

        },

        batchFileExport: function(path, battxt, batExecFlag, mac) {
          var batFile = new File(path);
          batFile.open("w");
          batFile.encoding = R_aeRender.chkfileEncoding();
          batFile.write(battxt);
          batFile.close();

          //alert("File exported to:\ "+path);
          if (batExecFlag == true) {
            batFile.execute();
          }

          return;
        },

        aerenderPath: function() {
          var aerenderFolderPath, aeCommand, aerenderCmdPath;

          if (parseFloat(app.version) < 8) {
            alert("R_renderCore.jsxinc supports AfterEffects CC 2020 or above.");
            return null;
          } else {
            if (($.os.match("wind")) == "Wind") { 
              aerenderFolderPath = Folder.startup.parent.parent.parent;
              aeCommand = File(aerenderFolderPath.fsName + "/aerender");

              if (aeCommand.exists) {
                aerenderCmdPath = aeCommand.fsName.replace(/\\\s/g, " ");
                return aerenderCmdPath;
              } else {
                return null;
              }


            } else if (($.os.match("Win")) == "Win") { //Windows
              aerenderFolderPath = Folder.startup;
              aeCommand = File(aerenderFolderPath + "\aerender.exe");

              if (aeCommand.exists) {
                aerenderCmdPath = aeCommand.fsName;
                return aerenderCmdPath;

              } else {
                return null;
              }

            } else {
              alert("This OS is not supported")
              return null;
            }
          }
        },

        startCheck: function() {
          var chkStatus,  chkPrefsSetting;

          if (parseFloat(app.version) < 14) {
            alert("This script requires AfterEffects 2020 or above.");
            return false;
          } else {
            chkPrefsSetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
            if (!chkPrefsSetting) {
              alert("Check your Preference ");
              return false;
            } else {
              chkStatus = this.MainGUI();
            }
          }
        }
    }

    this.R_aeRender.startCheck();
    
