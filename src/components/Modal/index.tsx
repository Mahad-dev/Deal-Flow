import React, { ReactNode, CSSProperties, MouseEvent } from "react";
import { RoundedCrossNew } from "../ui-icons";

interface ReusableModalProps {
  onClose: () => void;
  title?: string;
  body: ReactNode;
  titleDiv?: ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  overflowY?: CSSProperties["overflowY"];
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  onClose,
  title,
  body,
  titleDiv,
  maxWidth,
  maxHeight,
  overflowY,
}) => {
  const modalStyle: CSSProperties = {
    maxWidth: maxWidth || "760px",
    maxHeight: maxHeight || "400px",
    overflowY: overflowY || "hidden",
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose(); // Close the modal when clicking outside
  };

  return (
    <div
      className="absolute z-[100] top-0 left-0 w-full h-full flex items-center justify-center bg-[#0000009e] rounded-[20px]"
      onClick={handleClick}
    >
      <div
        style={modalStyle}
        className="animated-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[18px] w-[90%] md:w-full h-full overflow-hidden"
      >
        {title && onClose ? (
          <div className="relative">
            {title && (
              <h2 className="text-[17px] text-primaryblack font-medium mb-4 text-center py-[1.5rem] border-b border-gray-300">
                {title}
              </h2>
            )}
            {onClose && (
              <span
                className="absolute top-[10px] right-[10px] cursor-pointer"
                onClick={onClose}
              >
                <RoundedCrossNew />
              </span>
            )}
          </div>
        ) : (
          <div className="relative">
            {" "}
            <span
              className="absolute top-[10px] right-[10px] cursor-pointer"
              onClick={onClose}
            >
              <RoundedCrossNew />
            </span>
            {titleDiv}
          </div>
        )}

        {body}
      </div>
    </div>
  );
};

export default ReusableModal;
