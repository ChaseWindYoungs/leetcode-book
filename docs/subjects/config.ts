import { getFullPath, DocPaths } from '../utils/path';

const fullPath = function (
  restPath: string,
  defaultPath: string = DocPaths.Subjects
): string {
  return getFullPath(defaultPath, restPath);
};

const sideBarConfig = {};
const sideArr = [
  {
    text: "字符串",
    collapsible: true,
    children: [
      fullPath("string/3"),
      fullPath("string/14"),
      fullPath("string/567"),
    ],
  },
];
sideBarConfig[`/${DocPaths.Subjects}/`] = sideArr;

export default sideBarConfig;