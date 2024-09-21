// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Author: @aiiiden
contract BoardThread {
  uint public threadId = 1;

  event ThreadWritten(
    uint postId,
    address author,
    uint timestamp,
    string title,
    string contents,
    string imageUrl,
    bool isActive
  );

  event ThreadUpdated(
    uint postId,
    address author,
    uint timestamp,
    string title,
    string contents,
    string imageUrl,
    bool isActive
  );

  constructor() {}

  function writePost(
    string memory _title,
    string memory _contents,
    string memory _imageUrl
  ) public {
    require(bytes(_title).length > 0, 'Title cannot be empty');
    require(bytes(_contents).length > 0, 'Contents cannot be empty');

    threadId += 1;

    emit ThreadWritten(
      threadId,
      msg.sender,
      block.timestamp,
      _title,
      _contents,
      _imageUrl,
      true
    );
  }

  function updatePost(
    uint _postId,
    string memory _title,
    string memory _contents,
    string memory _imageUrl,
    bool _isActive
  ) public {
    require(_postId > 0, 'Invalid post ID');
    require(_postId <= threadId, 'Post ID does not exist');
    require(bytes(_title).length > 0, 'Title cannot be empty');
    require(bytes(_contents).length > 0, 'Contents cannot be empty');

    emit ThreadUpdated(
      _postId,
      msg.sender,
      block.timestamp,
      _title,
      _contents,
      _imageUrl,
      _isActive
    );
  }
}
