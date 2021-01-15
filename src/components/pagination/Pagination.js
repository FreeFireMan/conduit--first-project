import './Pagination.css'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import {setActivePagination} from "../../redux/action-creators";

function Pagination() {

  const dispatch = useDispatch()
  const {pagination, paginationActive} = useSelector(({post: {pagination, paginationActive}}) => ({
    pagination,
    paginationActive
  }))


  const arrPag = []
  arrPag[pagination - 1] = pagination
  arrPag.fill(0)

   return (
      pagination > 1 &&
      <div className='pagination-wrapper'>
        {arrPag.map((value, i) => <NavLink to={`/page/${i+1}`} key={i}
                  onClick={() => dispatch(setActivePagination(i))}
                  className={paginationActive === i + 1 ? 'pagination-item act' : 'pagination-item'}>{i + 1}</NavLink>)
        }
      </div>
  );
}

export default withRouter(Pagination)
