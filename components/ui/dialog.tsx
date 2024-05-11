import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import Button from "./shared/button";

interface DialogProps {
  url: string;
  title: string;
  btnLabel: string;
}

const Dialog = (props: DialogProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button>Open {props.btnLabel} Dialog</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-[925px] h-[80vh] mt-10 md:mt-0 rounded-xl p-10",
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bg-neutral-800", //bg-white 
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                "overflow-auto" // Add this line to the className
              )}
            >
              {/* <DialogPrimitive.Title className="pb-4 text-xl text-center font-semibold text-neutral-900 dark:text-neutral-100">
                {props.title}
              </DialogPrimitive.Title> */}
              {/* <DialogPrimitive.Description className="py-4 text-md text-center font-normal text-neutral-700 dark:text-neutral-400">
                Here below is our {props.title}.<br/>
              </DialogPrimitive.Description> */}

              <iframe src={props.url} className="w-full h-full rounded-lg overflow-y-auto" style={{scrollbarColor: 'black lightgrey', scrollbarWidth: 'auto'}}></iframe>

              {/* <div className="mt-4 flex justify-end">
                <DialogPrimitive.Close
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-neutral-100 dark:hover:bg-purple-600",
                    "border border-transparent",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Save
                </DialogPrimitive.Close>
              </div> */}

              <DialogPrimitive.Close
                className={clsx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <Cross1Icon className="h-4 w-4 text-neutral-500 hover:text-neutral-400" /> {/* // text-neutral-500 hover:text-neutral-700 */}
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };