import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchAllUsers, deleteUsers, createUsers } from '../../store/reducers/userReducer'; 
import classes from './userlist.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrashCan, faPen, faSort } from '@fortawesome/free-solid-svg-icons'; 
import ModalWindow from '../ModalWindow/ModalWindow'; 
 
const UserList = () => { 
  const dispatch = useDispatch(); 
  const { users } = useSelector((state) => state.users); 
  const [isModalOpen, setModalOpen] = useState(false); 
 
  const createUser = (user) => { 
    dispatch(createUsers(user)); 
    setModalOpen(false); 
  }; 
 
  const onDelete = (id) => { 
    dispatch(deleteUsers(id)); 
  }; 
 
  useEffect(() => { 
    dispatch(fetchAllUsers()); 
  }, [dispatch]); 
 
  return ( 
    <div className={classes.container}> 
      <div className={classes.userlist}> 
        <h1>UserList</h1> 
        <div className={classes.btn}> 
          <div className={classes.fasort}> 
            <FontAwesomeIcon icon={faSort} style={{ color: "#FFD43B" }} /> 
          </div> 
        </div> 
      </div> 
 
      {!isModalOpen && ( 
        <button className={classes.button} onClick={() => setModalOpen(true)}> 
          ADD NEW STUDENT 
        </button> 
      )} 
 
      {isModalOpen && <ModalWindow onSubmit={createUser} />} 
 
      <hr /> 
      {users && users.length > 0 ? ( 
        <table className={classes.container}> 
          <thead className={classes.use_container}> 
            <tr className={classes.use_nav}> 
              <th className={classes.use_names}>Name</th> 
              <th className={classes.use_names}>Email</th> 
              <th className={classes.use_names}>Phone</th> 
              <th className={classes.use_names}>Actions</th> 
            </tr> 
          </thead> 
          <tbody> 
            {users.map((user) => ( 
              <tr key={user.id} className={classes.users}> 
                <td className={classes.user_name}>{user.name}</td> 
                <td className={classes.user_name}>{user.email}</td> 
                <td className={classes.user_name}>{user.phone}</td> 
                <td> 
                  <FontAwesomeIcon className={classes.faPen} icon={faPen} style={{ color: 'yellow' }} /> 
                </td> 
                <td> 
 
 
                  <button onClick={() => onDelete(user.id)} ><FontAwesomeIcon onClick={() => onDelete(user.id)} icon={faTrashCan} className={classes.delete} style={{ color: 'yellowgreen' }} /></button> 
                </td> 
              </tr> 
            ))} 
          </tbody> 
        </table> 
      ) : ( 
        <p>пока что нет людей</p> 
      )} 
    </div> 
  ); 
}; 
 
export default UserList;