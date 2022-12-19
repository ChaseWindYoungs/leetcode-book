enum DocPaths {
  Subjects = 'subjects',
}

const getFullPath = function (pathPrefix: string, restPath: string): string {
  return `/${pathPrefix}/${restPath}.md`;
};

export { getFullPath, DocPaths };
