import Mock from 'mockjs'

const pdfFiles = [
  {
    type: 'folder',
    name: 'MyFolder',
  },
  {
    type: 'file',
    name: 'YouFile',
  }
];

const pptFiles = [
  {
    type: 'folder',
    name: 'Folder1',
  },
  {
    type: 'folder',
    name: 'Folder2',
  },
];

const homeworkFiles = [
  {
    type: 'file',
    name: 'YouFile',
  },
  {
    type: 'file',
    name: 'YouFile',
  }
];

const commentFiles = [
  {
    type: 'folder',
    name: 'MyFolder',
  },
  {
    type: 'file',
    name: 'YouFile',
  },
  {
    type: 'file',
    name: 'YouFile',
  }
];

const examFiles = [
  {
    type: 'folder',
    name: 'examFolder',
  },
  {
    type: 'file',
    name: 'examFile',
  }
];

const mindmapFiles = [
  {
    type: 'folder',
    name: 'mindmapFolder',
  },
  {
    type: 'file',
    name: 'mindmapFile',
  }
];

const otherFiles = [
  {
    type: 'folder',
    name: 'OtherFolder',
  },
  {
    type: 'file',
    name: 'OtherFile',
  }
];

Mock.mock('/pdf','get', pdfFiles);
Mock.mock('/ppt','get', pptFiles);
Mock.mock('/homework', 'get', homeworkFiles);
Mock.mock('/comment', 'get', commentFiles);
Mock.mock('/exam', 'get', examFiles);
Mock.mock('/mindmap', 'get', mindmapFiles);
Mock.mock('/other', 'get', otherFiles);