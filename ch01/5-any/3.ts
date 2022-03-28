// 함수 시그니처를 무시함

function calculateAge(birthDate: Date): number {
  return;
}

const birthDate: any = "1990-01-19";
calculateAge(birthDate); // executed
