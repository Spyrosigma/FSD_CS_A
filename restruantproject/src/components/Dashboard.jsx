import React from 'react'
import './App.css'

const Dashboard = () => {
    const [recipes, setRecipes] = React.useState([])

    React.useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
            .then(response => response.json())
            .then(data => setRecipes(data.meals))
    }, [])

    return (
        <div className="container">
            <h1>Welcome to Indian Restaurant</h1>
            <p>Experience the best Indian cuisine in town!</p>

            <section className="about">
                <h2>About Us</h2>
                <p>At Indian Restaurant, we offer a wide variety of traditional Indian dishes made with the freshest ingredients. Our chefs are experts in creating authentic flavors that will transport you to India with every bite.</p>
            </section>

            <section className="menu">
                <h2>Our Menu</h2>
                <ul>
                    {recipes && recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <li key={recipe.idMeal}>{recipe.strMeal}</li>
                        ))
                    ) : (
                        <li>Loading...</li>
                    )}
                </ul>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <p>Address: 1234 Spice Lane, Flavor Town, FT 56789</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@indianrestaurant.com</p>
            </section>
        </div>
    )
}

export default Dashboard