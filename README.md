# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## users table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|email|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages

## messages table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|message|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups_users table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_id|integer|null: false, foreign_key:true|
|user_id|integer|null: false, foreign_key:true|

### Association
- belongs_to :user
- belongs_to :group

## groups table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :users, through: :groups_users
- has_many :messages


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
