import './Pagination.css'
import React from "react";
import {useSelector} from "react-redux";

export default function Pagination() {

  const pagination = useSelector(({homePage: {pagination}}) => pagination)
  const arrPag = []
  arrPag[pagination - 1] = pagination

  return (
      <div className='pagination-wrapper'>
        {arrPag.map((value, i) => <div key={i} className='pagination-item'>{i + 1}</div>)
        }
      </div>
  );
}