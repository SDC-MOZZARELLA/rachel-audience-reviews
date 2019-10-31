


CRUD            | API Endpoint                 | Description
--------------- | ---------------------------- | -------------
Create/POST     | /api/audienceReviews         | Inserts a review to the database using req.body
Read / GET      | /api/audienceReviews/:movie  | Retrieves all reviews by the movie name that is passed from the req.params
Update / PUT    | /api/audienceReviews         | Updates existing review using the id and changes passed using the req.body
Delete / DELETE | /api/audienceReviews         | Deletes review using the id that is passed using the req.body