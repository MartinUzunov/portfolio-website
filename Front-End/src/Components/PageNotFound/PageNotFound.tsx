import {
  PageNotFoundBody,
  NotFoundImage,
  InfoText,
} from "./PageNotFoundElements";
import NotFoundIcon from "./../../Assets/page_not_found.png";

const PageNotFound = () => {
  return (
    <>
      <PageNotFoundBody>
        <NotFoundImage src={NotFoundIcon} />
        <InfoText
          style={{ fontSize: "4em", color: "yellowgreen", fontWeight: "bold" }}
        >
          Ooops
        </InfoText>
        <InfoText>Something Went Wrong</InfoText>
        <InfoText style={{ fontSize: "1em" }}>
          Error 404 Page Not Found
        </InfoText>
      </PageNotFoundBody>
    </>
  );
};

export default PageNotFound;
