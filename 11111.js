  <View style = {{alignItems: 'center', /*menu*/
        justifyContent: 'center',paddingTop: 20,}}>
            <View style = {styles.menu}>
                <View style = {{flexDirection: 'row',justifyContent: 'space-around'}}> 
                    <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/Trasuacategories.png')}/>
                          
                        </TouchableOpacity>
                    </View>
                     <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/cafe.png')}/>
                        </TouchableOpacity>
                    </View>
                      <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/soda.png')}/>
                        </TouchableOpacity>
                    </View>
                      <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/hamberger.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View> 
                        <TouchableOpacity style = {styles.buttomright}> 
                              <Image source = {require('../image/right.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                    
                <View style = {{flexDirection: 'row',justifyContent: 'space-around',paddingTop: 20,paddingRight: 44,}}> 
                    <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/tra.png')}/>
                        </TouchableOpacity>
                    </View>
                     <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/sinhto.png')}/>
                        </TouchableOpacity>
                    </View>
                      <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/kem.png')}/>
                        </TouchableOpacity>
                    </View>
                      <View style = {{paddingTop: 20,}}> 
                        <Image source = {require('../image/Ellipse20.png')}/>
                    </View>
                     <View> 
                        <TouchableOpacity> 
                          <Image source = {require('../image/combo.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      </View>
      
      <View style = {{justifyContent: 'center',alignItems:'center',paddingTop: 23}} /*list product*/>
        
        <Text style = {{fontSize:16,fontWeight: 'bold',position:'relative',right: 100,}}>Hom nay co gi hot ?</Text>
       
        <View style = {styles.listProduct}>
              
                <TouchableOpacity style = {styles.product}>
                  <Image source = {require("../image/Rectangle42.png")}/>
                  <View style = {{justifyContent:'center',alignItems:'center', paddingLeft: 8}}>
                      <Text style = {{fontSize: 14}}>Ưu đãi 10% cho các loại trà sữa.</Text>
                      <Text style = {{fontSize: 7}}>Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...</Text>
                  </View>
                  <Text style = {{fontSize: 10,textDecorationLine: 'underline',color:'#DABFAC',left: 74,top: 14,}}>xem chi tiết </Text>

                </TouchableOpacity>

                <TouchableOpacity style = {styles.product1}>
                  <Image source = {require("../image/Rectangle42.png")}/>
                     <View style = {{justifyContent:'center',alignItems:'center', paddingLeft: 8}}>
                      <Text style = {{fontSize: 14}}>Ưu đãi 10% cho các loại trà sữa.</Text>
                      <Text style = {{fontSize: 7}}>Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...</Text>
                  </View>
                  <Text style = {{fontSize: 10,textDecorationLine: 'underline',color:'#DABFAC',left: 74,top: 14,}}>xem chi tiết </Text>
                </TouchableOpacity>  
        </View>
        <View style = {styles.listProduct}>
              
                <TouchableOpacity style = {styles.product}>
                    <Image source = {require("../image/Rectangle42.png")}/>
                     <View style = {{justifyContent:'center',alignItems:'center', paddingLeft: 8}}>
                      <Text style = {{fontSize: 14}}>Ưu đãi 10% cho các loại trà sữa.</Text>
                      <Text style = {{fontSize: 7}}></Text>
                  </View>
                  <Text style = {{fontSize: 10,textDecorationLine: 'underline',color:'#DABFAC',left: 74,top: 14,}}>xem chi tiết </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.product1}>
                    <Image source = {require("../image/Rectangle42.png")}/>
                     <View style = {{justifyContent:'center',alignItems:'center', paddingLeft: 8}}>
                      <Text style = {{fontSize: 14}}>Ưu đãi 10% cho các loại trà sữa.</Text>
                      <Text style = {{fontSize: 7}}>Sed vitae feugiat turpis eu aliquet velit velit pulvinar. Integer nisl, egestas velit volutpat, condimentum tellus. Arcu massa ornare eget eu. Ultrices integer sed interdum augue egestas pharetra a...</Text>
                  </View>
                  <Text style = {{fontSize: 10,textDecorationLine: 'underline',color:'#DABFAC',left: 74,top: 14,}}>xem chi tiết </Text>
                </TouchableOpacity>  
        </View>  
        <TouchableOpacity style = {styles.buttom}>
            <Text>Xem thêm </Text>
        </TouchableOpacity>   
      </View>
       <View style = {{justifyContent: 'center',alignItems:'center',paddingTop: 23}} /*list product hot*/>
        
        <Text style = {{fontSize:16,fontWeight: 'bold',position:'relative',right: 100,}}>Món ngon tuần này</Text>
       
        <View style = {styles.listProduct}>
              
                <TouchableOpacity style = {styles.product}>
                <Image source = {require("../image/Rectangle43.png")}/>
                  <View style = {{justifyContent:'center',paddingLeft:8}}>
                      <Text style = {{fontSize:14}}>Trà sữa chân châu</Text>
                      <Text style = {{fontSize:16,fontWeight:'semi-bold',color:'#FFB830',paddingTop:9}}>
                      45.000 vnđ
                        <Text style = {{fontSize:16,fontStyle: 'italic',color:'#FF0404'}}>          Hot</Text>
                      
                      </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.product1}>
                <Image source = {require("../image/Rectangle43.png")}/>
                <View style = {{justifyContent:'center',paddingLeft:8}}>
                      <Text style = {{fontSize:14}}>Trà sữa chân châu</Text>
                      <Text style = {{fontSize:16,fontWeight:'semi-bold',color:'#FFB830',paddingTop:9}}>
                      45.000 vnđ
                        <Text style = {{fontSize:16,fontStyle: 'italic',color:'#FF0404'}}>          Hot</Text>
                      
                      </Text>
                  </View>
                </TouchableOpacity>  
        </View>
        <View style = {styles.listProduct}>
              
                <TouchableOpacity style = {styles.product}>
                <Image source = {require("../image/Rectangle43.png")}/>
                <View style = {{justifyContent:'center',paddingLeft:8}}>
                      <Text style = {{fontSize:14}}>Trà sữa chân châu</Text>
                      <Text style = {{fontSize:16,fontWeight:'semi-bold',color:'#FFB830',paddingTop:9}}>
                      45.000 vnđ
                        <Text style = {{fontSize:16,fontStyle: 'italic',color:'#FF0404'}}>          Hot</Text>
                      
                      </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.product1}>
                <Image source = {require("../image/Rectangle43.png")}/>
                <View style = {{justifyContent:'center',paddingLeft:8}}>
                      <Text style = {{fontSize:14}}>Trà sữa chân châu</Text>
                      <Text style = {{fontSize:16,fontWeight:'semi-bold',color:'#FFB830',paddingTop:9}}>
                      45.000 vnđ
                        <Text style = {{fontSize:16,fontStyle: 'italic',color:'#FF0404'}}>          Hot</Text>
                      
                      </Text>
                  </View>
                </TouchableOpacity>  
        </View>   
      </View>
menu: {
        height: 133,
        width: 328,
        backgroundColor: '#F7D59C',
        borderRadius: 7,  
        justifyContent: 'center',
        paddingLeft: 30,
      
    },
    listProduct: {
        height: 202,
        width:343,
        backgroundColor: '#fff',
        flexDirection : 'row',
        borderRadius: 7,
        
    },
    product: {
      height: 190,
      width: 162,
      backgroundColor: '#fff',
      borderRadius: 7,
      elevation: 10,
    },
    product1: {
      height: 190,
      width: 162,
      backgroundColor: '#fff',
      position: 'relative',
      left: 19,
      borderRadius: 7,
      elevation: 5,
    },
    buttom: {
      width: 106,
      height: 36,
      backgroundColor: '#F3F0D7',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginTop: 21,
    },
  
    buttomright: {
      
      left: 5,
      top: 40,
    },
