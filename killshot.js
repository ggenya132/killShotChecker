
module.exports = new Promise(function(resolve, reject){
    const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
                            let areAvailable = null;
request('https://www.jcrew.com/p/mens_category/jcrewingoodcompany/nike/nike-for-jcrew-killshot-2-sneakers/85231?color_name=white', function(error,response,html){
    const $ = cheerio.load(html);

//    const productSoldOutBox = $('#c-product__sold-out');
//    productSoldOutBox.each(function(i, element){
//        console.log(this);
    
     resolve(areAvailable = $('#c-product__sold-out').length < 1);
});
    
    


    
    
});
       
