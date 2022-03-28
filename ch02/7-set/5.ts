function getKey<K extends string>(val: any, key: K) {
  //...
}

getKey({}, "x"); // 정상 'x'는 string을 상속
getKey({}, Math.random() < 0.5 ? "a" : "b"); //  정상 'a'|'b'는 string을 상속
getKey({}, 12); // 12는 string에 할당할 수 없음 (12는 string에 상속할 수 없음)
