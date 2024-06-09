package org.zerock.mallapi.service;

import org.springframework.stereotype.Service;
import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.TodoDTO;
import org.zerock.mallapi.repository.TodoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@Transactional
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {
	private final TodoRepository todoRepository;

	@Override
	public TodoDTO get(Long tno) {
		Todo todo = todoRepository.findById(tno).orElseThrow();
		return entityToDTO(todo);
	}

	@Override
	public Long register(TodoDTO dto) {

		Todo result = todoRepository.save(dtoToEntity(dto)); // insert, update 모두 save(E);

		return result.getTno();
	}

	@Override
	public void modify(TodoDTO dto) {
		Todo todo = todoRepository.findById(dto.getTno()).orElseThrow();
		todo.setTitle(dto.getTitle());
		todo.setContent(dto.getContent());
		todo.setComplete(dto.isComplete());
		todo.setDueDate(dto.getDueDate());

		todoRepository.save(todo); // insert, update 모두 save(E);
	}

	@Override
	public void remove(Long tno) {
		todoRepository.deleteById(tno);
	}

}
