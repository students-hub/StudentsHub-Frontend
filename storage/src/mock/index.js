import Mock from 'mockjs';
import subdir from './folder';
import category from './category';

Mock.mock(RegExp('/fs'), 'get', option => {
  const path = JSON.parse(option.body).path;
  switch (path) {
    // Mocking category
    case '/pdf':      return category.pdfFiles;
    case '/ppt':      return category.pptFiles;
    case '/homework': return category.homeworkFiles;
    case '/comment':  return category.commentFiles;
    case '/exam':     return category.examFiles;
    case '/mindmap':  return category.mindmapFiles;
    case '/other':    return category.otherFiles;
    // Mocking subdirectory
    case '/pdf/MyFolder':
      return subdir.folderFiles;
    case '/pdf/MyFolder/FolderInMyFolder':
      return subdir.subFolderFiles;
    default:
      return null;
  }
})