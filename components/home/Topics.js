import Link from 'next/link'

export default function Topics({categories}) {

  const filteredCategories = categories.filter(categories => {
    return categories.slug !== 'startups';
  });
  
  return (
    <section className="w-full pt-12 pb-14 bg-gray-50 sm:py-20 lg:pt-24">
      <div className="max-w-xl px-4 mx-auto sm:max-w-3xl sm:px-6 md:px-8 lg:max-w-screen-2xl">
        
        {/* Section Header */}
        <h3 className="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">Trending topics</h3>

        {/* Topics */}
        <div className="relative mt-8 sm:mt-9">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 md:gap-6 lg:gap-4 xl:gap-6">
            
            {filteredCategories.map((category, index) => (
              <div key={index} className="relative z-0 h-40 overflow-hidden transition duration-300 ease-in-out transform translate-y-0 shadow-md cursor-pointer group hover:-translate-y-1">
                <Link href={`/categories/${category.frontmatter.name.replace(/ /g, '-').toLowerCase()}`}>
                  <a className="absolute inset-0 z-10 w-full h-full shadow-md" />
                </Link>
                
                {/* Image */}
                <div className="absolute inset-0 w-full h-full bg-gray-100 bg-center bg-no-repeat bg-cover" style={{zIndex: -1, backgroundImage: `url(${category.frontmatter.image})`}}>
                </div>
                
                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 w-full pb-6">
                  <div className="flex justify-center w-full">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-800 rounded-md backdrop-blur-lg bg-white/90">
                      {category.frontmatter.name}
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

  )
}