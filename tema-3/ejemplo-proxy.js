// Proxy
// let proxy = new Proxy(target, handler)

let t = {x: 1, y: 2}
let p = new Proxy(t, {})
t.c = 2
p.d = 4
console.log(p,t)

let {proxy, revoke} = Proxy.revocable(p,{})
console.log(proxy.x);
revoke()

console.log(proxy); // No existe el objeto copiadom, pero sí el original
