// import { left } from '@popperjs/core';
import React, { Component } from 'react';
import '../css/booking.css';
import axios from 'axios';


class booking extends Component {
    state = {
        fullname : localStorage.getItem('fullname'),
		phone:localStorage.getItem('phone'),
        from:"",
        to:"",
        date:"",
        time:"",
        distance:"",
        price:""
      
    }
    
ChangeItem=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
//img handler
calculatePrice() {
	const price_per_km = this.state.price;
	const count = 40;
	const total_price = parseInt(price_per_km * count);
	// console.log(total_price)
	return total_price
}
SendItems=(e)=>{
    //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
    e.preventDefault();

    axios.post("http://localhost:90/customer/booking",this.state)
    .then((response)=>{
        console.log(response)
		alert(response.data.message)
		window.location.reload(true);
    })
    .catch((error)=>{
        console.log(error.response)
    })
}
    render() {
        return (
            <div>
            <section id="hero2">
            <div class="hero2-container" data-aos="fade-up">
                <h1>Welcome to Booking Page</h1>
                <h2></h2>
            
            </div>
            </section> 
        
            <section id="booking" class="booking">
		    <div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1>Make Advanced Booking</h1>
						</div>
						<form>
                            {/* <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder={localStorage.getItem('fullname')} name="fullname"  value={this.state.fullname} onChange={this.ChangeItem}required/>
										<span class="form-label">Fullname</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Phone..." name="phone"   value={this.state.phone} onChange={this.ChangeItem}required />
										<span class="form-label">Phone</span>
									</div>
								</div>
							</div> */}
                            <div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<span class="form-label" >Pick Up</span>
									<select name="from" class="form-control"type="from" placeholder="from..."value={this.state.from} onChange={this.ChangeItem}>
                                        <option  disabled="" selected="">Dillibazar</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Lokanthali</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
										<option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sadobato</option>
										<option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sinamangal</option>
										<option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
										<option>Gatthaghar</option>
										<option >Thimi</option>
										<option>Balkumari</option>
										<option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
										<option>Jawalakhel</option>
										<option >Lagankhel</option>
										<option>Pulchowk</option>
                                    </select>
									</div>
									</div>
							
								<div class="col-md-6">
								<div class="form-group">
										<span class="form-label">Drop Up</span>
									<select name="to" class="form-control" type="to" placeholder="to..." value={this.state.to} onChange={this.ChangeItem}>
                                        <option  disabled="" selected="">Lokanthali</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Dillibazar</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
										<option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sadobato</option>
										<option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
										<option>Sinamangal</option>
										<option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
										<option>Gatthaghar</option>
										<option >Thimi</option>
										<option>Balkumari</option>
										<option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
										<option>Jawalakhel</option>
										<option >Lagankhel</option>
										<option>Pulchowk</option>
                                    </select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date" placeholder="Date..." name="date"  value={this.state.date} onChange={this.ChangeItem} required/>
										<span class="form-label">Date</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Time..." name="time"  value={this.state.time} onChange={this.ChangeItem} required/>
										<span class="form-label">Time</span>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Distance..." name="distance" value={this.state.distance} onChange={this.ChangeItem} required/>
										<span class="form-label">Distance</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.ChangeItem} required/>
										<span class="form-label">Price</span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn" onClick={this.SendItems}>Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>






            </div>

        )
    }
}

export default booking;