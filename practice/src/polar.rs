use polars::prelude::*;
use std::fs::File;
use std::io::{self, Read};
use std::env;

pub fn analyse() -> Result<DataFrame, PolarsError> {

    LazyCsvReader::new("E:\\rust coding files\\rust\\practice\\src\\RA2021_A16.csv")
        .has_header(true)
        .finish()?
        
        .collect()
}
