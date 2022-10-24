import React, { useEffect, useState } from 'react';
import ContentItem from './ContentItem';



const Content: React.FunctionComponent = () => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true)
  

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response: Response) => {
              if (!response.ok) {
                setIsLoading(false);
                throw Error;
              }
                return response.json();
              })
            .then((data) => {
              setData(data);
              setIsLoading(false);
              console.log(data.products[0].id);
              
            })
            .catch((e) => {
              console.log('There was an error');
              setIsLoading(false);
            })
    }, [isLoading]);

    
    
    

    return (
        <div className="content-wrapper">
            <h1>Here is a list of out all products</h1>
            {isLoading && (
              <h2>Wait a second, content is loading....</h2>
            )}
            {data && (
              
                    data.products.map((item: any) => (
                        <ContentItem item={item} key={item.id}/>
                    ))
                    
                
            )}
        </div>
    )
}

export default Content;