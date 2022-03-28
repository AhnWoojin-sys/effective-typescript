// any 타입은 리팩터링 할때 버그를 찾을 수 없음

interface ComponentProps {
  onSelectItem: (item: number) => void;
}

function renderSelector(props: ComponentProps) {
  console.log(props);
}

let selectedId = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });
