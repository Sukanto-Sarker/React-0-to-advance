import { useCounter } from './useCounter';


export default function CounterDisplay() {
  const { count } = useCounter();
  return (
    <>
    <h1>Counter Display its Start fron {count}</h1>
    </>
  )
}
