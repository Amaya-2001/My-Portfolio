import React from "react";
import Navbar from "./Navbar";

function Article() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl mt-5 text-center text-slate-950">
        Unlock the Power of my Project Articles, Dive into Inspiring Insights
        and Expertise!
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:ml-5 md:mr-5">
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 1</h2>
            <p className="text-xl italic">
              Chat App Using React and Firebase Part 01
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://nonimi-ink.medium.com/chat-app-using-react-and-firebase-part-01-1d95db245cbe?sk=0a4c925cab72d13e568e7acc8fc93adb"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 2</h2>
            <p className="text-xl italic">
              Chat App Using React and Firebase Part 02
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://nonimi-ink.medium.com/chat-app-using-react-and-firebase-part-02-1adb60c6abea?sk=842e0cad266f7eb9d0664d9452d0f3b3"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 3</h2>
            <p className="text-xl italic">
              User Authentication Using MERN Stack Part 01
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://nonimi-ink.medium.com/user-authentication-and-authorization-part-01-eb1b66556af5?sk=0ed18691b9ef8bae13a0791dbc5ebb40"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 4</h2>
            <p className="text-xl italic">
              User Authentication Using MERN Stack Part 02
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://nonimi-ink.medium.com/user-authentication-using-mern-stack-part-02-6e844de9aaf6?sk=642e6fab6b22e84084b75d7992e4f7f1"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 5</h2>
            <p className="text-xl italic">
              Cron Job Email Sending With Node JS
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://nonimi-ink.medium.com/cron-job-email-sending-with-node-js-c047eb8d02a5?sk=4f2cc9df4faa9b7b3bc778baa1536462"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Article 6</h2>
            <p className="text-xl italic">Creating Todo App With Next JS</p>
            <div className="card-actions justify-end">
              <button
                className="btn"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://medium.com/@amayawickramasinghe2001/creating-a-to-do-app-with-next-js-cdb58f0b12d1"
                  )
                }
              >
                Read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
