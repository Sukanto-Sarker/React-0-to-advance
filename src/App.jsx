import CounterDisplay from './context/CounterDisplay'
import CounterBtn from './context/CounterBtn'
import UseEffect from './hook/UseEffect'
import UseEffectess from './hook/UseEffectess'
import UseCallBack from './hook/UseCallBack'
import UseMemo from './hook/UseMemo'
import FilterAndCount from './hook/FilterAndCount'
import Counterr from './hook/Counterr'
import Posts from './hook/Posts'
import ApiCall from './ApiCall'
import CURD from './CURD'
import ProductList from './productList'
import Cart from './cart'
import CartTotal from './CardTotal'


export default function App() {
  return (
    <>
   <div>
    <ProductList />
    <div>
      <Cart />
      <CartTotal/>
    </div>
   </div>
    </>
  )
}

