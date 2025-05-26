interface IInfos {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export type Tinfos = {
  notes: IInfos[];
};
