import { useState } from "react";
import { SendEmail } from "./components/sentEmail";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!buttonClicked ? (
          <motion.div
            className="bg-blue-200 w-screen h-screen grid place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            exit={{ opacity: 0, transition: { duration: 3 } }}
          >
            <div>
              <h1 className="text-2xl">For this valentines day...</h1>
              <img
                src="https://i.pinimg.com/originals/32/ef/49/32ef49d9a139f6b506f432d7376a1450.gif"
                alt="heart gif"
              />
              <p className="text-2xl">Find the hidden button for a surprise</p>
              <div className="absolute w-screen h-screen top-0 left-0 z-10 grid grid-cols-3 grid-rows-3 place-items-center">
                <button className="opacity-0 hover:opacity-100 w-24 h-4 ">
                  Not me!
                </button>
                <button className="opacity-0 hover:opacity-100 w-24 h-4 mb-36">
                  Not me either!
                </button>
                <button className="opacity-0 hover:opacity-100 w-24 h-4 ml-36 ">
                  You might be almost there
                </button>
                <button className="opacity-0 hover:opacity-100 w-24 h-4 mr-44">
                  So close...?
                </button>
                <button className="opacity-0 hover:opacity-100 w-24 h-4 ">
                  You can do it
                </button>
                <button className="opacity-0 hover:opacity-100 w-24 h-4 mb-24 mr-12">
                  Keep it up
                </button>
                <button
                  className="opacity-0 hover:opacity-100 w-24 h-4 mt-40 "
                  onClick={() => {
                    setButtonClicked(!buttonClicked);
                    SendEmail();
                  }}
                >
                  Click me!
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="absolute w-screen h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            exit={{ opacity: 0 }}
          >
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDA5azdlOTd2YzM2b3N5NTdlenltZWVmem55dDBscWFrbWt0eDF0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gbeVN2ZPbG2COKA/giphy.gif"
              alt="Heart background"
              className="w-full -translate-y-64 -z-10"
            />
            <div className="absolute w-screen h-screen left-0 top-0 overflow-hidden grid place-items-center">
              <div className="text-3xl">
                <h1>Carolinna Mao</h1>
                <h2>The love of my life</h2>
                <p>Check your email ;)</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
