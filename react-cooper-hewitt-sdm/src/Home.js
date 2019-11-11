import React from 'react';

function Home (){
    return(
        <div className='HomeContainer'>
            <img src='images/John-Rombola-skyscrapers.jpg' className='HomeImage' alt='John Rombola Skyscrapers'/>
            <h1 className='HomeHeader'>ABOUT THE MUSEUM</h1>
            <p className='HomeDescription'>Cooper Hewitt, Smithsonian Design Museum is located on NYC’s Museum Mile in the historic, landmark Carnegie Mansion. The museum is accessible to all visitors and family friendly with baby-changing facilities available in our ground-floor restrooms.</p>
            <h1 className='HomeHeader'>MUSEUM ADDRESS</h1>
            <p className='HomeDescription'>
            2 East 91st Street
            (between 5th and Madison Avenues)
            New York, New York 10128.
            <br/>
            There are two entrances to the museum. The main entrance on East 91st Street is an accessible path.  The entrance to the museum’s Arthur Ross Terrace and Garden entrance on East 90th Street is also accessible and  open year round.  From the garden, there is an entrance to our Tarallucci e Vino Cafe, through which visitors may also enter the museum.</p>
            <h1 className='HomeHeader'>WHAT'S ON</h1>
            <p className='HomeDescription'>Cooper Hewitt’s exhibitions feature a rich mix of historic and contemporary design objects from our permanent collection, special exhibitions, and dynamic interactive experiences. We also have an exciting calendar of events, including hands-on workshops, talks, and family programs.</p>
            <h1 className='HomeHeader'>DAILY PUBLIC TOURS</h1>
            <p className='HomeDescription'>Free tours of the museum’s exhibitions from an experienced team of guides take place every day and encourage an informal exchange of ideas among the general public. Tours take place at 11:30 a.m. and 1:30 p.m. on weekdays and 1:00 p.m. and 3:00 p.m. on weekends. Visitors may request dynamic description from the tour guide.</p>
            <h1 className='HomeHeader'>ADMISSION TO COOPER HEWITT</h1>
            <table>
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
    )
}

export default Home