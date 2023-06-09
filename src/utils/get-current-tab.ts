type TypeTab = {
  name: string;
  active: boolean;
};

export default function getCurrentTab(tabs: TypeTab[], types: number[], scroll: number) {
  let height = 0;
  let tab = '';

  for (let i = 0; i < types.length; i += 1) {
    if ((scroll < height + types[i] && i === 0)
      || (scroll + types[i] / 2 >= height && scroll + types[i] / 2 < height + types[i])) {
      tab = tabs[i].name;
      break;
    }

    height += types[i];
  }

  return tab;
}
