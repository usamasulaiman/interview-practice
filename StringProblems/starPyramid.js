function pyramid(n) {
  if (n <= 0) return;
  for (let i =1; i <=n; i++) {
    const gap = (' ').repeat(n-i)
    console.log(`${gap}${'*'.repeat((i*2) - 1)}${gap}`)
  }
}

pyramid(4)