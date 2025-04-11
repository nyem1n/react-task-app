import React, { FC } from 'react'
import { IList } from '../../types';
import ActionButton from '../ActionButton/ActionButton';
import { listContainer } from './ListsContainer.css';
import  List  from '../List/List'

type TListContainerProprs = {
    boardId : string;
    lists : IList[];
}

const ListsContainer : FC<TListContainerProprs> = ({
    lists,
    boardId
}) => {
    return (
        <div className={listContainer}>
            {
                lists.map(list => (
                    <List 
                    key = {list.listId} 
                    list = {list}
                    boardId = {boardId}
                    />
                ))
            }
            <ActionButton 
                boardId = {boardId} 
                listId = {""}
                list
            />
        </div>
    )
}

export default ListsContainer