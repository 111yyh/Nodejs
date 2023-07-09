/* 
    进程和线程
        - 进程（厂房） ：程序的运行的环境

        - 线程（工人） ：线程是实际进行运算的东西

    同步
        - 通常情况代码是自上向下一行行执行
        - 前边代码不执行，后边的代码也不会执行
        - 同步代码执行会出现阻塞的情况
        - 一行代码执行慢会影响整个程序的执行

    解决同步问题
        - java python：通过多线程解决
*/

function sum(a, b) {
  const begin = Date.now();
  while (Date.now() - begin < 10000) {}
  return a + b;
}

console.log(111);

const result = sum(123, 456);

console.log(result);

console.log(222);
