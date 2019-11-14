import React from 'react';

function Home (){
    return(
        <div>
            <img src='images/South-west-signage-1.jpg' className='HomeImage' alt='Cooper Hewitt Sign and Building'/>
            <div className='HomeContainer'>
                <h1 className='HomeHeaderAbout'>ABOUT THE MUSEUM</h1>
                <p className='HomeDescriptionAbout'>Cooper Hewitt, Smithsonian Design Museum is located on NYC’s Museum Mile in the historic, landmark Carnegie Mansion. The museum is accessible to all visitors and family friendly with baby-changing facilities available in our ground-floor restrooms.
                    <br/>
                    <br/>

                {/* </p>
                <p className='HomeDescriptionAbout'> */}
                Our exhibitions feature a rich mix of historic and contemporary design objects from our permanent collection, special exhibitions, and dynamic interactive experiences. We also have an exciting calendar of events, including hands-on workshops, talks, and family programs.
                </p>
                    <hr className='HomeHR'/>
                <h1 className='HomeHeaderAddress'>MUSEUM ADDRESS</h1>
                <p className='HomeDescriptionAddress'>
                2 East 91st Street
                (between 5th Avenue and Madison Avenue),  
                New York, NY 10128.
                    <br/>
                    <br/>
                {/* </p>
                <p className='HomeDescriptionAddress'> */}
                There are two entrances to the museum. The main entrance on East 91st Street is an accessible path.  The entrance to the museum’s Arthur Ross Terrace and Garden entrance on East 90th Street is also accessible and  open year round.  From the garden, there is an entrance to our Tarallucci e Vino Cafe, through which visitors may also enter the museum.</p>
                    <hr className='HomeHR'/>
                <h1 className='HomeHeaderTours'>DAILY PUBLIC TOURS</h1>
                <p className='HomeDescriptionTours'>Free tours of the museum’s exhibitions from an experienced team of guides take place every day and encourage an informal exchange of ideas among the general public. Tours take place at 11:30 a.m. and 1:30 p.m. on weekdays and 1:00 p.m. and 3:00 p.m. on weekends. Visitors may request dynamic description from the tour guide.</p>
                    <hr className='HomeHR'/>
                <h1 className='HomeHeaderShop'>COOPER HEWITT SHOP</h1>
                <p className='HomeDescriptionShop'>SHOP Cooper Hewitt offers a diverse product mix, including a wide selection of design books, limited-edition works by contemporary designers, and exclusive items that relate to the museum’s exhibitions and extensive permanent collection.
                    <br/>
                    <br/>
                Proceeds benefit the museum. International shipping available.</p>
                    <hr className='HomeHR'/>
                <h1 className='HomeHeaderPricing'>ADMISSION TO COOPER HEWITT</h1>
                <table className='PricingTable'>
                    <tr>
                        <th></th>
                        <th>BUY ONLINE</th>
                        <th>BUY AT DOOR</th>
                    </tr>
                    <tr>
                        <td>Adults</td>	
                        <td>$16</td>	
                        <td>$18</td>	
                    </tr>
                    <tr>
                        <td>Visitors with Disabilities</td>
                        <td>$10</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>Seniors (62 & above)</td>	
                        <td>$10</td>
                        <td>$12</td>
                    </tr>
                    <tr>
                        <td>Students</td>	
                        <td>$7</td>
                        <td>$9</td>
                    </tr>
                    <tr>
                        <td>18 & under</td>	
                        <td>Free</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>Members
                    (Cooper Hewitt and Smithsonian Members)	No need to book in advance.</td>	
                        <td>Free</td>
                        <td>Free</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Home