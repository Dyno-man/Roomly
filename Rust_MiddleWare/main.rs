mod model;
#[cfg(test)]
mod test;

use actix_cors::Cors;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use model::{User, Chore};
use mongodb::{bson::doc, options::IndexOptions, Client, Collection, IndexModel};

const DB_NAME: &str = "test";
const COLL_NAME: &str = "Users";


#[get("/")]
async fn home() -> impl Responder {
    HttpResponse::Ok().body("How the hell will this work")
}

#[post("/add_user")]
async fn add_user(client: web::Data<Client>, form: web::Form<User>) -> HttpResponse {
    let collection = client.database(DB_NAME).collection(COLL_NAME);
    let result = collection.insert_one(form.into_inner()).await;

    match result {
        Ok(_) => HttpResponse::Ok().body("User added"),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}


#[get("/get_user/{username}")]
async fn get_user(client: web::Data<Client>, username: web::Path<String>) -> HttpResponse {
    let username = username.into_inner();
    let collection: Collection<User> = client.database(DB_NAME).collection(COLL_NAME);

    match collection.find_one(doc! { "first_name": "", "last_name": "", "username": &username, "email": "" }).await {
        Ok(Some(user)) => HttpResponse::Ok().json(user),
        Ok(None) => {
            HttpResponse::NotFound().body(format!("User {} not found", username))
        }
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}

#[post("/create_chore")]
async fn create_chore(client: web::Data<Client>, form: web::Json<Chore>) -> HttpResponse {
    let collection = client.database(DB_NAME).collection(COLL_NAME);
    let result = collection.insert_one(form.into_inner()).await;

    match result {
        Ok(_) => HttpResponse::Ok().json(serde_json::json!({ "message" : "Chore created" })),
        Err(e) => HttpResponse::InternalServerError().json(serde_json::json!({ "message": e.to_string() })),
    }
}


async fn create_username_index(client: &Client) {
    let options = IndexOptions::builder().unique(false).build();
    let model = IndexModel::builder()
        .keys(doc! { "username": 1 })
        .options(options)
        .build();

    client
        .database(DB_NAME)
        .collection::<User>(COLL_NAME)
        .create_index(model)
        .await
        .expect("Creating an index should succeed");

}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let uri = std::env::var("MONGODB_URI").unwrap_or_else(|_| "mongodb://localhost:27017".to_string());

    let client = Client::with_uri_str(uri).await.expect("failed to connect");

    create_username_index(&client).await;

    HttpServer::new(move || {
        App::new()
            .wrap(
                Cors::default()
                //Only in the dev state allow CORS
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
            )
            .app_data(web::Data::new(client.clone()))
            .service(add_user)
            .service(get_user)
            .service(home)
            .service(create_chore)

    })
        .bind(("localhost", 3001))?
        .run()
        .await

}
