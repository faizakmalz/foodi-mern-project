import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from 'react-icons/fa'

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState('default')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        //fetch data
        const fetchData = async () => {
            try{
                const response = await fetch('/menu.json')
                const data = await response.json();
                // console.log(data)
                // return data;
                setMenu(data);
                setFilteredItems(data);
            } catch {
                console.log('error')
            }
        };

        fetchData();

    }, [])


    //filter data on category
    const filterItems = (category) => {
        const filtered = category === 'all' ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered)
        setSelectedCategory(category)
        setSortOption('default')

        setCurrentPage(1);
    };

    //show all
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory('all');
        setSortOption('default')

        setCurrentPage(1);

    }

    //sorting
    const handleSort = (option) => {
        setSortOption(option);
        let sortedItems = [...filteredItems];

        switch(option) {
            case "A-Z": 
                sortedItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Z-A": 
                sortedItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "low-to-high": 
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low": 
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                sortedItems = [...filteredItems];
                break;
        }

        setFilteredItems(sortedItems);
        setCurrentPage(1)
    };

    //pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



  return (
    <div className='w-full flex flex-col justify-center mb-8'>
        <div className='md:w-full space-y-7 px-[20%] text-center h-[75vh] flex flex-col justify-center items-center pt-16'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious <span className='text-green'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut, Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost.</p>
            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>

        <div className='section-container'>
            <div className='flex justify-between mb-12'>
                <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-warp text-primaryBG'>
                    <button onClick={showAll} className={selectedCategory === 'all' ? 'active transition-all duration-200' : 'transition-all duration-200'}>All</button>
                    <button onClick={() => filterItems('salad')} className={selectedCategory === 'salad' ? 'active transition-all duration-200' : 'transition-all duration-200'}>Salad</button>
                    <button onClick={() => filterItems('pizza')} className={selectedCategory === 'pizza' ? 'active transition-all duration-200' : 'transition-all duration-200'}>Pizza</button>
                    <button onClick={() => filterItems('soup')} className={selectedCategory === 'soup' ? 'active transition-all duration-200' : 'transition-all duration-200'}>Soups</button>
                    <button onClick={() => filterItems('dessert')} className={selectedCategory === 'dessert' ? 'active transition-all duration-200' : 'transition-all duration-200'}>Desserts</button>
                    <button onClick={() => filterItems('drinks')} className={selectedCategory === 'drinks' ? 'active transition-all duration-200' : 'transition-all duration-200'}>Drinks</button>
                </div>

                <div>
                    <div className='bg-black p-2 rounded-md'>
                        <FaFilter className='h-4 w-4 text-white'/>
                    </div>

                    <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-md'>
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to high</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                {
                    currentItems.map((item) => (
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>

            <div className='my-24 flex justify-center'>
                {
                    Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) => (
                        <button key={index + 1} onClick={() => paginate(index + 1)}
                        className={`transition-all duration-200 mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? ' bg-green text-white' : 'bg-gray-200'}`}
                        >{index + 1}</button>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Menu