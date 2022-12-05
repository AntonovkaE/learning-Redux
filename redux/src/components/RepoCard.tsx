import React from 'react';
import { IRepo } from '../models/models';

export function RepoCard({repo}: {repo: IRepo}) {
  return (
    <a className='link' href={repo.html_url} target='blank'>
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
    <h2 className='text-lg font-bold'>{repo.full_name}</h2>
    <p className='text-sm'>
      Forks: <span className='font-bold'>{repo.forks}</span>
      Wathers: <span className='font-bold'>{repo.watchers}</span>
    </p>
    <p className='text-sm font-thin'>{repo?.description}</p>
  </div>
    </a>)
}