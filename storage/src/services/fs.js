import axios from 'axios';
/* eslint-disable */
// http://1.14.165.254:8080
const prodAddr = 'http://1.14.165.254:8080';
axios.defaults.baseURL = prodAddr;

export function getFileAddr(bucketName, fullPath) {
  return `${prodAddr}/v1/FileSystem/download?bucketName=${bucketName}&fileName=${fullPath}`;
}

export function setFileList(path) {
  this.$http.post('/v1/FileSystem/getFileWithPrefix/go-api-proj/', { prefix: path })
    .then(({ data }) => {
      this.files = data;
    });
}

export function deleteFileByAddr(bucketName, fullPath) {
  this.$http.delete('/v1/FileSystem/delete', 
    {
      data: { 
        bucketName: bucketName, 
        fileName: fullPath
    }
  });
} 

export function renameFile(bucketName, oldfileName, newfileName) {
  this.$http.post('/v1/FileSystem/Rename/' + bucketName, 
    { oldfileName, newfileName });
}

export function uploadFile(bucketname, file, dirPath) {
  let formData = new FormData();
  formData.append('uploadFile', file);
  formData.append('bucketName', bucketname);
  formData.append('filePath', dirPath);

  this.$http.post('/v1/FileSystem/uploadfile', formData);
}

export function createFolder(bucketname, fullDirPath) {
  this.$http.post('/v1/FileSystem/CreateFolder/' + bucketname, { dirName: fullDirPath });
}

export function deleteFolder(bucketName, fullDirPath) {
  this.$http.delete('/v1/FileSystem/DeleteFolder/' + bucketName,  { data: { dirName: fullDirPath + '/' } } );
}

export function renameFolder(bucketName, olddirName, newdirName) {
  this.$http.post('/v1/FileSystem/RenameFolder/' + bucketName, 
    { olddirName, newdirName });
}