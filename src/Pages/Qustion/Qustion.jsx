// import React from 'react';

import { Link } from "react-router-dom";

const Qustion = () => {
  return (
    <>
      <div className="bg-base-200">
        <div>
          <h1 className="text-3xl font-bold">
            1. What is an access token and refresh token?
          </h1>
          <p className="py-6">
            An access token is a credential that is used to authenticate and
            authorize access to protected resources in an application or system.
            It is typically a string of characters that is issued by an
            authentication server after a successful authentication process. The
            access token is included in each request to the server and is used
            to verify the user identity and permissions. It grants temporary
            access to specific resources for a limited period of time. A refresh
            token, on the other hand, is a credential that is used to obtain a
            new access token after the current one expires. Refresh tokens are
            typically issued along with the access token by the authentication
            server. When the access token expires, the refresh token can be used
            to request a new access token without requiring the user to re-enter
            their credentials. This helps improve the user experience by
            allowing seamless and continuous access to protected resources. In
            summary, an access token is used to authenticate and authorize
            access to resources, while a refresh token is used to obtain a new
            access token when the current one expires.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            2. How do they work and where should we store them on the
            client-side?
          </h1>
          <p className="py-6">
            Access tokens and refresh tokens work together to provide secure and
            efficient authentication and authorization. Here a short answer to
            your question: Access tokens are typically stored on the
            client-side, often in memory or local storage, as they are needed
            for each request to the server to authenticate and authorize access
            to protected resources. Refresh tokens, on the other hand, should be
            stored securely on the client-side, such as in an HTTP-only cookie
            or a secure storage mechanism, to prevent unauthorized access. They
            are used to obtain a new access token when the current one expires,
            without requiring the user to re-authenticate. It is important to
            follow security best practices when handling and storing tokens on
            the client-side, such as using secure storage mechanisms and
            protecting against cross-site scripting (XSS) attacks.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            3. Compare SQL and NoSQL databases?
          </h1>
          <p className="py-6">
            <span className="text-3xl">SQL Databases:</span> <br />
            Structured Query Language (SQL) databases are based on a relational
            model. They use a structured schema to define tables, columns, and
            relationships between entities. SQL databases ensure ACID
            (Atomicity, Consistency, Isolation, Durability) properties,
            providing strong consistency and data integrity. They are suitable
            for complex queries and transactions. Examples: MySQL, PostgreSQL,
            Oracle. <br />
            <span className="text-3xl">NoSQL Databases:</span> <br />
            NoSQL databases are non-relational and provide flexible data models.
            They can handle unstructured, semi-structured, and structured data.
            NoSQL databases offer horizontal scalability and high performance
            for large-scale distributed systems. They trade off some consistency
            for scalability and availability, often providing eventual
            consistency. They are suitable for handling large amounts of data,
            real-time applications, and rapid development. Examples: MongoDB,
            Cassandra, Redis.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            4. What is express js? What is Nest JS ?
          </h1>
          <p className="py-6">
            <span className="text-3xl"> Express.js:</span>
            Express.js is a minimalistic and flexible web application framework
            for Node.js. It provides a set of robust features for building web
            applications and APIs. Express.js simplifies the process of handling
            HTTP requests, routing, middleware, and response handling. It allows
            developers to create server-side applications efficiently and
            quickly. Express.js has a large and active community, along with
            numerous third-party libraries and middleware. It is widely used for
            building lightweight, scalable, and modular web applications. <br />
            <span className="text-3xl"> Nest.js:</span> <br />
            Nest.js is a progressive and opinionated Node.js framework for
            building efficient, scalable, and maintainable server-side
            applications. It is built on top of Express.js and enhances it with
            additional features and architectural patterns. Nest.js follows the
            modular design principle, promoting the use of decorators, modules,
            services, and controllers. It provides out-of-the-box support for
            features like dependency injection, middleware, exception handling,
            and more. Nest.js is designed to support the development of
            enterprise-grade applications with a focus on code organization and
            scalability. It is gaining popularity for its strong typing and
            TypeScript integration.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            5. What is MongoDB aggregate and how does it work ?
          </h1>
          <p className="py-6">
            <span className="text-3xl">MongoDB Aggregation:</span>
            MongoDB aggregation framework is a powerful tool for processing and
            transforming data within the database. It allows you to perform
            complex data manipulations, aggregations, and computations on the
            documents stored in MongoDB collections. Aggregation operations in
            MongoDB are performed using a pipeline approach, where multiple
            stages are combined to process the data. Each stage in the pipeline
            performs a specific operation on the documents, such as filtering,
            grouping, sorting, projecting, and transforming the data. The
            pipeline stages are executed sequentially, with the output of one
            stage serving as the input for the next stage. Aggregation pipelines
            can be constructed using a combination of various stages to achieve
            the desired data transformation and analysis. The aggregation
            framework supports a wide range of operators and expressions for
            performing operations like matching, grouping, sorting, joining,
            calculating aggregates, and more. It provides a flexible and
            efficient way to process large volumes of data directly within the
            database.
          </p>
        </div>
        <div className="text-center mt-4 mb-8">
          <Link to="/">
            <button className="btn btn-primary">Back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Qustion;
