import React from 'react';

function Films(){
    return(
        <div className='films_page'>
            <div className='film1Window'>
                <h1 className = "filmTitle">Water - Winter Wonderland</h1>
                <iframe src="https://www.youtube.com/embed/AV9GulutX3U?si=8KGvnR8IWdwr8-HR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Films;