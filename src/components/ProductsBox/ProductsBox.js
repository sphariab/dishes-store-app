import React from  'react'
import styled  from 'styled-components';

import {useFilter} from "../../providers/hooks";

import ProductItem from "./ProductItem";

let goods = [
  {
    title: 'Овсяная каша с фруктами',
    price: 25,
    imageUrl: '../../assets/images/im1.jpg',
    category: '1',
    id: 0
  },
  {
    title: 'Яичница глазунья с овощами на сковородке',
    price: 25,
    imageUrl: '../../assets/images/im2.jpg',
    category: '1',
    id: 1
  },
  {
    title: 'Сет азербайджанский завтрак',
    price: 30,
    imageUrl: '../../assets/images/im3.jpg',
    category: '1',
    id: 2
  },
  {
    title: 'Яичница с помидорами по-бакински',
    price: 45,
    imageUrl: '../../assets/images/im4.jpg',
    category: '1',
    id: 3
  },
  {
    title: 'Сырники со сметаной',
    price: 45,
    imageUrl: '../../assets/images/im5.jpg',
    category: '1',
    id: 4
  },
  {
    title: 'Шпинатный крем-суп',
    price: 50,
    imageUrl: '../../assets/images/im6.jpg',
    category: '2',
    id: 5
  },
  {
    title: 'Суп Пити',
    price: 85,
    imageUrl: '../../assets/images/im7.jpg',
    category: '2',
    id: 6
  },
  {
    title: 'Борщ украинский',
    price: 95,
    imageUrl: '../../assets/images/im8.jpg',
    category: '2',
    id: 7
  },
  {
    title: 'Суп Кюфта Бозбаш',
    price: 100,
    imageUrl: '../../assets/images/im9.jpg',
    category: '2',
    id: 8
  },
  {
    title: 'Картофель фри',
    price: 125,
    imageUrl: '../../assets/images/im10.jpg',
    category: '3',
    id: 9
  },
  {
    title: 'Картофель по-домашнему',
    price: 135,
    imageUrl: '../../assets/images/im11.jpg',
    category: '3',
    id: 10
  },
  {
    title: 'Рис с овощами',
    price: 150,
    imageUrl: '../../assets/images/im12.jpg',
    category: '3',
    id: 11
  }
];

const ProductsBox = () => {
  const {priceFilter, categoryFilter } = useFilter();
  let goodsFiltered = goods.filter(item => priceFilter === 0 ? item : item.price < priceFilter)
  goodsFiltered = goodsFiltered.filter(item => categoryFilter ==='0' ? item : item.category === categoryFilter)

  return (
    <Wrapper>
      {goodsFiltered.map((item) => <ProductItem key={item.id} item={item}/>)}
    </Wrapper>

  )
}

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`

export default ProductsBox;
