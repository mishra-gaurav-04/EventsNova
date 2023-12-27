import React from 'react';
import {IEvent} from '@/types/event-interface';

type CollectionProps = {
    data : IEvent[],
    emptyTitle : string,
    emptyStateSubtext : string,
    limit : number,
    pages : number | string,
    totalPages ?: number,
    urlParamName ?: string,
    collectionType : 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection = ({data,emptyTitle,emptyStateSubtext,limit,pages,totalPages=0,collectionType,urlParamName}:CollectionProps) => {
  return (
    <div>Collection</div>
  )
}

export default Collection