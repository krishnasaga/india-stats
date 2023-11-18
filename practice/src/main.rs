


use std::io;
use std::cmp::Ordering;
use rand::Rng;
use serde::{Deserialize,Serialize};

mod polar;

#[derive(Serialize,Deserialize)]
struct VectorsExample {
  x: Vec<String>
}

struct Rectangle {
  height:u32,
  width:u32,

}

impl Rectangle {
  fn area(&self) -> u32 {
      self.width * self.height
  }
}

// fn main() {

// let data = polar::analyse().unwrap();
// let json = serde_json::to_string(&data).unwrap();

// println!("{:#}",json);

// let rectangle=Rectangle{
//   height:11,
//   width:5
// };
// println!("Hight and width {}", rectangle.height);
// println!("Hight and width {}", rectangle.width);
// println!("area of the rectangle {}",rectangle.area());

//   println!("hi aditya");
//   let secret_number=rand::thread_rng().gen_range(1, 101);

// println!("the secret number is: {}",secret_number);
// loop {
  
//   println!("please guess the number");
// let mut guess=String::new();

// io::stdin().read_line(&mut guess).expect("Failed to read line");
// let guess:u32=match guess.trim().parse(){
// Ok(num)=>num,
// Err(_)=> continue,
// };
// println!("you guessed: {} ",guess);

// match  guess.cmp(&secret_number){
//   Ordering::Less=>println!("Too small"),
//   Ordering::Greater => println!("too big"),
//   Ordering::Equal=>{
//     println!("you win!");
//     break;
//   },
// }
// }
// }


fn main(){
  let v1 = VectorsExample {
    x: vec![String::from("String1")]
  };
  println!("{:?}",v1.x);
  println!("{:?}",serde_json::to_string(&v1).unwrap())
}
