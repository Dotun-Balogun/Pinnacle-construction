import BlogCard from '@/components/ui/card/BlogCard'
import React from 'react'
import image_1 from '@/assets/images/portfolio7-1.jpg'
import image_2 from '@/assets/images/portfolio2-1.jpg'

const BlogPage = () => {
  const blogData=[
    { id:1,
      image:image_1,
      title:'construction',
      date:'10 June 2025'
    }
    ,
    
      { id:2,
      image:image_2,
      title:'Site map',
      date:'20 Oct'
    },
    { id:3,
      image:image_1,
      title:'Harvest',
      date:'20 NOv'

    },
    { id:4,
      image:image_2,
      title:'Yes conference',
      date:'30 July'
    }
    
  ]
  return (
    <div className='max-w-7xl mx-auto px-4 py-10 '>
      <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center">
        {
          blogData.map((blog,index)=>(
            <BlogCard 
            key={index}
            text={blog.title}
            index={blog.id}
             {...blog}/>
          ))
        }
     
      
 <div className="flex">
     
      </div>
      
      </div>
    </div>
  )
}

export default BlogPage