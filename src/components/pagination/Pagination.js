import './Pagination.css'
import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export default function Pagination() {

  const pagination = useSelector(({post: {pagination}}) => pagination)
  const arrPag = []
  arrPag[pagination - 1] = pagination
  arrPag.fill(0)

  return (
      <div className='pagination-wrapper'>
        {arrPag.map((value, i) => <NavLink to={'/page/'+i} key={i} className='pagination-item'>{i + 1}</NavLink>)
        }
      </div>
  );
}
