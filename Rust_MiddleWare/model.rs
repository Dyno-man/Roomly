use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct User {
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub username: String,
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct Chore {
    //pub username: String,
    pub chore_title: String,
    pub chore_desc: String,
    pub chore_weight: u8,
    pub chore_swap_freq: u16,
}
