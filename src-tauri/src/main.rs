// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


#[tokio::main]
async fn main() {
    arch_installer2_lib::run()
}
